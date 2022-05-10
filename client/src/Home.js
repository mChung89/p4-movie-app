import { useEffect } from 'react'
export default function Home ({ user, setUser }) {
    useEffect(() => {
        fetch("/me")
        .then(res => res.ok ? res.json().then(setUser) : console.log("not ok"))
    },[setUser])

    console.log(user)
    
    if (user) {
    return <h1>Welcome, {user.username}</h1>
    } else {
        return <h1>Welcome new user!</h1>
    }
}