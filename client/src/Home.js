import "./styles/home.css"
import { useEffect } from 'react'
export default function Home ({ user, setUser }) {
  useEffect(() => {
    fetch("/me").then((res) =>
      res.ok ? res.json().then(setUser) : console.log("not ok")
    );
  }, [setUser]);

  return (
    <section class="hero">
      <div class="content">
        <h2>{user ? `Welcome back ${user.username}` : `Welcome newcomer!`}</h2>
      </div>
      <div class="waves"></div>
    </section>
  );
}

//     if (user) {
//     return <h1>Welcome, {user.username}</h1>
//     } else {
//         return <h1>Welcome new user!</h1>
//     }
// }