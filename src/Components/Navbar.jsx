import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import logo from "../assets/socio-logo.png";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // Load saved theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => navigate("/"))
      .catch((error) => console.error("Logout Error:", error));
  };

  return (
    <div className="navbar bg-primary shadow px-4">
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Socio Logo" className="h-10" />
        </Link>
      </div>

      <div className="flex-none flex items-center gap-4">
        <Link to="/upcoming" className="btn btn-ghost text-sm text-secondary">
          Upcoming Events
        </Link>

        <button
          onClick={toggleTheme}
          className="btn btn-sm btn-circle bg-secondary text-white"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        {!user ? (
          <div className="flex gap-2">
            <Link to="/auth/login" className="btn btn-sm btn-secondary text-white">
              Login
            </Link>
            <Link
              to="/auth/signup"
              className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-secondary"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="dropdown dropdown-end relative flex items-center gap-2">
            <div tabIndex={0} className="avatar cursor-pointer">
              <div className="w-10 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img
                  src={user.photoURL || "https://i.ibb.co/MBtjqXQ/default-avatar.png"}
                  alt="User Avatar"
                />
              </div>
            </div>
            <span className="text-sm font-semibold text-white hidden sm:block">
              {user.displayName || "Anonymous"}
            </span>

            <ul
              tabIndex={0}
              className="dropdown-content mt-[200px] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><Link to="/create">Create Event</Link></li>
              <li><Link to="/manage">Manage Events</Link></li>
              <li><Link to="/joined">Joined Events</Link></li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="text-red-500 hover:text-red-700"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
