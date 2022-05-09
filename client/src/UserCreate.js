import { useState } from 'react'

function UserCreate () {
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
  console.log(formData)
  function handleSubmit (e) {
    e.preventDefault()
    fetch(`http://localhost:3000/users`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
  }
  return (
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input name="username" onChange={handleChange} value={formData.username}></input>
        <label>Password</label>
        <input name="password" onChange={handleChange} value={formData.password} id="password">
        </input>
        <button type="submit">Submit
        </button>
      </form>
  );
}

export default UserCreate