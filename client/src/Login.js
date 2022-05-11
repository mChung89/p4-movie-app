import "./styles/login.css";
import UserCreate from "./UserCreate";
import UserLogin from "./UserLogin";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'



function Login({setUser}) {
  const [errors, setErrors] = useState(null)
  const [newUser, setNewUser] = useState(true);
  console.log(errors)
  return (
    <div className="login">
      <div>
        <h1>Welcome! Please sign in</h1>
      </div>
      <div className="login-form">

    

        {newUser ? <UserLogin setUser={setUser} errors={errors} setErrors={setErrors}/> : <UserCreate errors={errors} setErrors={setErrors} setUser={setUser}/>}
        <button onClick={() => {
          setNewUser((prev) => !prev);
          setErrors(null)}
        }>

          {newUser ? "New User? Create an Account" : "Already a User? Login!" }
        </button>
      </div>
    </div>
  );
}

export default Login;
