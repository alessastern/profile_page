import { useState } from "react";
import "../styles.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="loginform">
      <div className="title">Log in</div>
      <div className="formfield">
        <input className="input" />
      </div>
      <div className="formfield">
        <input className="input" />
      </div>
      <div className="formfield">
        <button className="button">go!</button>
      </div>
    </div>
  );
}

export default LoginPage;
