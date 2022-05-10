import "./styles/login.css";
import UserCreate from "./UserCreate";
import UserLogin from "./UserLogin";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  function log_in(){
    setNewUser((prev) => !prev)
    navigate('/')
  }


  const [newUser, setNewUser] = useState(true);
  return (
    <div className="login">
      <div>
        <h1>Welcome! Please sign in</h1>
      </div>
      <div className="login-form">
        {newUser ? <UserLogin /> : <UserCreate />}
        <button onClick={log_in}>
          {newUser ? "New User? Create an Account" : "Already a User? Login!" }
        </button>
      </div>
    </div>
  );
}

export default Login;
