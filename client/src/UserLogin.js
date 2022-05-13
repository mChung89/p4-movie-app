import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserLogin({setUser}){
    const [errors, setErrors] = useState("")
    const navigate = useNavigate()

  const defaultState = {
    username: "",
    password: ""
    }
  const [formData, setFormData] = useState(defaultState)

  function handleChange (e) {
    const key = e.target.name
    const value = e.target.value
    setFormData({...formData, [key]: value})
  }

  function authorized (data) {
    setUser(data);
    setErrors(null);
    navigate('/')
  }

  function handleSubmit (e) {
    e.preventDefault()
    fetch(`/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Application: "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.ok ? res.json()
    .then(data => authorized(data)) : res.json().then(setErrors).catch(err => console.log(err))
  )}


  return (
      <>
      <h3>Please log in</h3>
      <form className='login-form' onSubmit={handleSubmit}>
        <label>Username</label>
        <br></br>
        <input name="username" onChange={handleChange} value={formData.username}></input>
        <br></br>
        <label>Password</label>
        <br></br>
        <input name="password" onChange={handleChange} value={formData.password} id="password">
        </input>
        <br></br>
        <div className="errors">
        {errors ? <p>{errors.error}</p> : null}
        </div>
        <button type="submit">Submit</button>
      </form>
      </>
  );
}

export default UserLogin