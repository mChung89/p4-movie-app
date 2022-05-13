import "./styles/home.css"
import { useEffect } from 'react'
export default function Home ({ user, setUser }) {
  useEffect(() => {
    fetch("/me").then((res) =>
      res.ok ? res.json().then(setUser) : console.log("not ok")
    );
  }, [setUser]);

  return (
    <section className="hero">
      <div className="content">
        <h2>{user ? `Welcome back ${user.username}` : `Welcome !`}</h2>
      </div>
      <div className="waves"></div>
    </section>
  );
}