import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("username-----", username);
    console.log("password-----", password);
    setUsername("");
    setPassword("");
    navigate("/");
  }
  return (
    <div className="loginpage page">
      <form className="loginpage__form card" onSubmit={(e) => login(e)}>
        <h1 className="loginpage__formelement">Login</h1>
        <br />
        <br />
        <TextField
          className="loginpage__formelement"
          required
          id="outlined-required"
          value={username}
          label="Username"
          size="small"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <TextField
          required
          className="loginpage__formelement"
          id="outlined-password-input"
          type="password"
          label="Password"
          value={password}
          size="small"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button
          className="loginpage__formelement"
          type="submit"
          variant="contained"
        >
          Log In
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
