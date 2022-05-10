import './styles/navbar.css'
import { Link, Outlet } from 'react-router-dom'
function NavBar ({ user,setUser }) {

  function handleClick () {
    fetch('/logout',{method: 'DELETE'})
    .then(res => res.ok ? console.log("Session over") : alert("Session not deleted..."))
    .then(data => setUser(null))
  }
  
  const logButton = user ? <a className="login-button" onClick={handleClick}>Log out</a> : <Link className="login-button" to="/login">Login</Link>
    return (
      <div className="nav">
        <nav className="topnav wave-container">
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