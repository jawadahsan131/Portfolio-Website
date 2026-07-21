from collections import defaultdict, deque
from datetime import datetime, timedelta, timezone
from typing import Deque

from fastapi import APIRouter, Depends, HTTPException, Request, status

from app.core.config import Settings, get_settings
from app.schemas.contact import ContactResponse, ContactSchema
from app.services.email import send_contact_email

router = APIRouter(prefix="/api", tags=["contact"])
request_log: dict[str, Deque[datetime]] = defaultdict(deque)


def check_rate_limit(ip_address: str) -> None:
    now = datetime.now(timezone.utc)
    window_start = now - timedelta(hours=1)
    entries = request_log[ip_address]

    while entries and entries[0] < window_start:
        entries.popleft()

    if len(entries) >= 5:
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="Rate limit exceeded. Please try again later.",
        )

    entries.append(now)


@router.post("/contact", response_model=ContactResponse)
async def contact(
    payload: ContactSchema,
    request: Request,
    settings: Settings = Depends(get_settings),
) -> ContactResponse:
    if payload.honeypot:
        return ContactResponse(success=True, message="Message received.")

    client_host = request.client.host if request.client else "unknown"
    check_rate_limit(client_host)

    await send_contact_email(payload, settings)
    return ContactResponse(success=True, message="Message sent successfully.")
