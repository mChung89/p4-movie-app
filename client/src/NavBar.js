import './styles/navbar.css'
import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom'
function NavBar ({ user,setUser }) {
  const navigate = useNavigate()
  
  function handleClick () {
    fetch('/logout',{method: 'DELETE'})
    .then(res => res.ok ? console.log("Session over") : alert("Session not deleted..."))
    .then(data => {
        setUser(null);
        navigate('/')})}
    

  const watchList = <NavLink to='/Watchlist'>Watchlist</NavLink>
  
  const logButton = user ? <span className="login-button" onClick={handleClick}>Log out</span> : <Link className="login-button" to="/login">Login</Link>
    return (
      <div className="nav">
        <nav className="topnav wave-container">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          {user ? watchList : null}
          {logButton}
        </nav>
        <Outlet />
      </div>
    );
}

export default NavBar