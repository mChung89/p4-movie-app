import { useState } from "react";

function UserCreate({ setUser, setErrors, errors, navigate }) {
  const defaultState = {
    username: "",
    password: "",
    password_confirmation: ""
  };
  const [formData, setFormData] = useState(defaultState);
  const [passwordErr, setPasswordErr] = useState(null)

  function handleChange(e) {
    setPasswordErr(null)
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(formData.password !== formData.password_confirmation) {
      setPasswordErr(["Confirmation password does not match"])
      return
    }
    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",    
      },
      body: JSON.stringify(formData),
    })
    .then(res => res.ok ? res.json()
    .then(data => {
      setUser(data);
      navigate('/')}) : res.json().then(setErrors));
  }
  return (
    <>
      <h3>Sign up a New Account</h3>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <br></br>
        <input
          name="username"
          onChange={handleChange}
          value={formData.username}
        ></input>
        <br></br>
        <label>Password</label>
        <br></br>
        <input
          name="password"
          onChange={handleChange}
          value={formData.password}
          id="password"
        ></input>
        <br></br>
        <label>Confirm Password</label>
        <br></br>
        <input
          name="password_confirmation"
          onChange={handleChange}
          value={formData.password_confirmation}
          id="password_confirmation"
          type='password'
        ></input>
        <br></br>
        <div className="errors">
        {passwordErr ? <p>{passwordErr}</p> : null}
        {errors ? <p>{errors.errors}</p> : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UserCreate;
