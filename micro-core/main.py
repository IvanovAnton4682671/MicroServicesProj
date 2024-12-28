from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uvicorn
from models import UserModel

#создаём экземпляр приложения
app = FastAPI()

#настройка Middleware
app.add_middleware(
    CORSMiddleware,           #встроенная поддержка CORS
    allow_origins=["*"],      #список доменов, с которых сервер принимает запросы
    allow_credentials=True,   #разрешение на использование cookies и токенов в запросах
    allow_methods=["*"],      #разрешённые метода запросов (GET, POST и т.д.)
    allow_headers=["*"],      #разрешённые заголовки запросов
)

#стандартный GET-запрос
@app.get("/")
async def hello():
    return "Ай-я-я-я-я-я-яй! Hello world, Hello world написали"

#тестовая обработка авторизации
@app.post(
    "/authorization",
    tags=["Вход в учётную запись"],
    summary="Обработка авторизации"
)
async def authorization_handler(user: UserModel):
    if user.email == "anton-ivanov-080203@mail.ru" and user.password == "123":
        return JSONResponse(
            content={"message": "Авторизация успешна!"},
            status_code=200,   #всё ОК
        )
    else:
        return JSONResponse(
            content={"message": "Пользователь не найден!"},
            status_code=202,   #данные получены, но такого пользователя нет
        )

#запуск сервера из консоли командой python main.py
if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
