import { useState } from 'react'

function UserLogin(){
    const [username, setUsername] = useState("")

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
    fetch(`/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Application: "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json)
    .then(data => console.log(data))
  }
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
        <button type="submit">Submit
        </button>
      </form>
      </>
  );
}

export default UserLogin