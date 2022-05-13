import { useState } from "react";

function UserCreate({ setUser, setErrors, errors, navigate }) {
  const defaultState = {
    username: "",
    password: "",
    password_confirmation: "",
  };
  const [formData, setFormData] = useState(defaultState);
  const [passwordErr, setPasswordErr] = useState(null);

  function handleChange(e) {
    setPasswordErr(null);
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      setPasswordErr(["Confirmation password does not match"]);
      return;
    }
    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) =>
      res.ok
        ? res.json().then((data) => {
            setUser(data);
            navigate("/");
          })
        : res.json().then(setErrors)
    );
  }
  return (
    <>
      <div className="login-module">
        <h1>Sign up a New Account</h1>
      </div>
      <div className="login-module">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            placeholder="Enter Username"
            className="text-field"
            name="username"
            onChange={handleChange}
            value={formData.username}
          ></input>
          <br></br>
          <br></br>
          <input
            className='text-field'
            name="password"
            onChange={handleChange}
            value={formData.password}
            id="password"
            type="password"
            placeholder="Minimum 6 characters"
          ></input>
          <br></br>
          <br></br>
          <input
            placeholder="Confirm your password"
            className="text-field"
            name="password_confirmation"
            onChange={handleChange}
            value={formData.password_confirmation}
            id="password_confirmation"
            type="password"
          ></input>
          <br></br>
          <div className="errors">
            {passwordErr ? <p>{passwordErr}</p> : null}
            {errors ? <p>{errors.errors}</p> : null}
          </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default UserCreate;
