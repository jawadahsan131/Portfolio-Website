from pydantic import BaseModel, EmailStr, Field


class ContactSchema(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    subject: str = Field(min_length=1, max_length=200)
    message: str = Field(min_length=10, max_length=2000)
    honeypot: str = ""


class ContactResponse(BaseModel):
    success: bool
    message: str
