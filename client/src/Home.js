import { useEffect, useState } from 'react'
export default function Home () {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/me")
        .then(res => res.json())
        .then(setUser)
    },[])

    console.log(user)
    
    if (user) {
    return <h1>Welcome, {user.username}</h1>
    } else {
        return <h1>Welcome new user!</h1>
    }
}