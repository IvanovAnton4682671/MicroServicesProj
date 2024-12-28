import React from "react";
import axios from "axios";
import styles from "./LogInForm.module.css";

function LogInForm({ onAuthorize }) {
  //хранение почты пользователя
  const [email, setEmail] = React.useState("");

  //хранение пароля пользователя
  const [password, setPassword] = React.useState("");

  //отправка формы авторизации
  const handleSubmitAuth = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Не оставляйте поля формы пустыми!");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/authorization", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        onAuthorize();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Ошибка сети при авторизации: ", error);
      alert("Ошибка при соединении с сервером!");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div></div>
      <div className={styles.base_form}>
        <form onSubmit={handleSubmitAuth}>
          <h2>Авторизация</h2>
          <input
            placeholder="Почта"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Войти</button>
        </form>
      </div>
      <div></div>
    </div>
  );
}

export default LogInForm;
