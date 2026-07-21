from email.message import EmailMessage
from html import escape

import aiosmtplib

from app.core.config import Settings
from app.schemas.contact import ContactSchema


async def send_contact_email(payload: ContactSchema, settings: Settings) -> None:
    message = EmailMessage()
    message["From"] = settings.smtp_user
    message["To"] = settings.to_email
    message["Reply-To"] = payload.email
    message["Subject"] = f"Portfolio contact: {payload.subject}"

    html = f"""
    <html>
      <body style="font-family: Inter, Arial, sans-serif; background: #131313; color: #e5e2e1; padding: 24px;">
        <h1 style="color: #adc6ff;">New portfolio inquiry</h1>
        <p><strong>Name:</strong> {escape(payload.name)}</p>
        <p><strong>Email:</strong> {escape(payload.email)}</p>
        <p><strong>Subject:</strong> {escape(payload.subject)}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space: pre-wrap; border: 1px solid #414755; padding: 16px;">{escape(payload.message)}</div>
      </body>
    </html>
    """

    message.set_content(
        f"Name: {payload.name}\nEmail: {payload.email}\nSubject: {payload.subject}\n\n{payload.message}"
    )
    message.add_alternative(html, subtype="html")

    await aiosmtplib.send(
        message,
        hostname=settings.smtp_host,
        port=settings.smtp_port,
        username=settings.smtp_user,
        password=settings.smtp_pass,
        start_tls=True,
    )
