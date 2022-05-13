import "./styles/login.css";
import UserCreate from "./UserCreate";
import UserLogin from "./UserLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [errors, setErrors] = useState(null);
  const [newUser, setNewUser] = useState(true);
  const navigate = useNavigate();
  return (
    <div id="login-background">
      <div className="login">
        <div className="login-form">
          {newUser ? (
            <UserLogin
              navigate={navigate}
              setUser={setUser}
              errors={errors}
              setErrors={setErrors}
            />
          ) : (
            <UserCreate
              navigate={navigate}
              errors={errors}
              setErrors={setErrors}
              setUser={setUser}
            />
          )}
        </div>
          <button
            id='toggle-login'
            onClick={() => {
              setNewUser((prev) => !prev);
              setErrors(null);
            }}
          >
            {newUser ? "New User? Create an Account" : "Already a User? Login!"}
          </button>
      </div>
    </div>
  );
}

export default Login;
