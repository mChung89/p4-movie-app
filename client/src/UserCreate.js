import { useState } from "react";

function UserCreate({ setUser, setErrors, errors }) {
  const defaultState = {
    username: "",
    password: "",
    passwordConfirmation: ""
  };
  const [formData, setFormData] = useState(defaultState);
  const [passwordErr, setPasswordErr] = useState(null)

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(formData.password !== formData.passwordConfirmation) {
      setPasswordErr(["Confirmation password does not match"])
      return
    }
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",    
      },
      body: JSON.stringify(formData),
    })
    .then(res => res.ok ? res.json()
    .then(setUser) : res.json().then(setErrors));
  }
  return (
    <>
      <h3>This is the create page</h3>
      <form onSubmit={handleSubmit}>
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
          name="passwordConfirmation"
          onChange={handleChange}
          value={formData.passwordConfirmation}
          id="password-confirmation"
          type='password'
        ></input>
        <br></br>
        {passwordErr ? <p>{passwordErr}</p> : null}
        {errors ? <p>{errors.errors}</p> : null}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UserCreate;
