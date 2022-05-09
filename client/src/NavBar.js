import './styles/navbar.css'
import { Link, Outlet } from 'react-router-dom'
function NavBar () {

    return (
      <div>
        <nav className="topnav">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link id="login" to="/login">Login</Link>
        </nav>
        <Outlet />
      </div>
    );
}

export default NavBar