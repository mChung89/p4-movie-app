import './styles/navbar.css'
import { Link, Outlet } from 'react-router-dom'
function NavBar ({ user,setUser }) {

  function handleClick () {
    fetch('/logout',{method: 'DELETE'})
    .then(res => res.ok ? console.log("Session over") : alert("Session not deleted..."))
    .then(data => setUser(null))
  }
  
  const logButton = user ? <button className="login-button"onClick={handleClick}>Log out</button> : <Link id="login-button" to="/login">Login</Link>
    return (
      <div className="nav">
        <nav className="topnav">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to='/Watchlist'>Watchlist</Link>
          {logButton}
        </nav>
        <Outlet />
      </div>
    );
}

export default NavBar