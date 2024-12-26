import React from "react";
import LogInForm from "./components/LogInForm/LogInForm";
import Body from "./components/Body/Body";

function App() {
  //состояние авторизации пользователя
  const [authorized, setAuthorized] = React.useState(false);

  //пользователь вошёл в систему
  const handleAuthorize = () => {
    setAuthorized(true);
  };

  return authorized === false ? (
    <LogInForm onAuthorize={handleAuthorize}></LogInForm>
  ) : (
    <Body></Body>
  );
}

export default App;
