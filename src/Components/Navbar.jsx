import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router"; 
import logo from "../assets/socio-logo.png";
import { FaMoon, FaSun } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthContext";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const {user, logOut} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogOut = () =>{
    logOut()
    .then(()=>navigate('/'))
    .catch(err => console.error(err));
  }


  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="navbar bg-primary shadow-md px-4">
      {/* Logo Section */}
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Socio Logo" className="h-10 w-auto" />
        </Link>
      </div>

      {/* Menu + User Actions */}
      <div className="flex-none flex gap-3 items-center">
        <Link to="/upcoming" className="btn btn-ghost text-sm text-secondary">Upcoming Events</Link>

        {/* Theme Toggle */}
        <button className="btn btn-sm btn-circle bg-primary text-white" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        {/* User Authentication */}
        {!user ? (
          <div className="flex gap-2">
            <Link to="/auth/login" className="btn btn-sm bg-secondary text-black hover:opacity-90">
              Login
            </Link>
            <Link to="/auth/signup" className="btn btn-sm btn-outline border-secondary text-secondary hover:bg-secondary hover:text-black">
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="avatar cursor-pointer">
              <div className="w-10 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} alt="Profile" />
              </div>
            </div>
            <ul tabIndex={0} className="dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[1]">
              <li className="px-2 py-1 text-sm font-bold text-primary">{user.displayName}</li>
              <li><Link to="/create">Create Event</Link></li>
              <li><Link to="/manage">Manage Events</Link></li>
              <li><Link to="/joined">Joined Events</Link></li>
              <li><button onClick={handleLogOut} className="text-red-500">Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
