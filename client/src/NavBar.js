import './styles/navbar.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
function NavBar ({ user,setUser }) {
  const navigate = useNavigate()
  
  function handleClick () {
    fetch('/logout',{method: 'DELETE'})
    .then(res => res.ok ? console.log("Session over") : alert("Session not deleted..."))
    .then(data => {
        setUser(null);
        navigate('/')})}
    

  const watchList = <Link to='/Watchlist'>Watchlist</Link>
  
  const logButton = user ? <a className="login-button" onClick={handleClick}>Log out</a> : <Link className="login-button" to="/login">Login</Link>
    return (
      <div className="nav">
        <nav className="topnav wave-container">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          {user ? watchList : null}
          {logButton}
        </nav>
        <Outlet />
      </div>
    );
}

export default NavBar