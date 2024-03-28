import { useEffect, useState } from "react";
import "../styles.css";

function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setDisabled] = useState(true);

  const checkValidity = (login, password) => {
    return login === "developer21" && password === "123456"
      ? setDisabled(false)
      : setDisabled(true);
  };

  useEffect(() => {
    checkValidity(login, password);
  }, [login, password]);

  return (
    <div className="loginform">
      <div className="title">Log in</div>
      <form id="login">
        <div className="formfield">
          <input
            className="input"
            placeholder="login"
            type="text"
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="formfield">
          <input
            className="input"
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <div className="formfield">
        <button className="button" form="login" disabled={isDisabled}>
          go!
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
