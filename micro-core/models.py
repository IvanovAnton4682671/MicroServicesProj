from pydantic import BaseModel, EmailStr

class UserModel(BaseModel):
    email: EmailStr
    password: str