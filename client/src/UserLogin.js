import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserLogin(){
    const [username, setUsername] = useState("")
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
    .then(data => {
      setUsername(data)
      setErrors("")
      navigate('/movies')
    }) : res.json().then(setErrors)
  )}

  return (
      <>
      <h3>This is the login Page</h3>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br></br>
        <input name="username" onChange={handleChange} value={formData.username}></input>
        <br></br>
        <label>Password</label>
        <br></br>
        <input name="password" onChange={handleChange} value={formData.password} id="password">
        </input>
        <br></br>
        {errors ? <p>{errors.errors}</p> : null}
        <button type="submit">Submit
        </button>
      </form>
      </>
  );
}

export default UserLogin