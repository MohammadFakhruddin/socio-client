import { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import logo from "../assets/socio-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Load saved theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  const handleLogOut = () => {
    logOut()
      .then(() => navigate("/"))
      .catch((error) => console.error("Logout Error:", error));
  };

  const NavLinks = () => (
    <>
      <Link to="/upcoming" className="btn btn-ghost text-sm text-secondary hover:text-primary">
        Upcoming Events
      </Link>
      {user && (
        <>
          <Link to="/create" className="btn btn-ghost text-sm text-secondary hover:text-primary">
            Create Event
          </Link>
          <Link to="/manage" className="btn btn-ghost text-sm text-secondary hover:text-primary">
            Manage Events
          </Link>
          <Link to="/joined" className="btn btn-ghost text-sm text-secondary hover:text-primary">
            Joined Events
          </Link>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-primary shadow px-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Socio Logo" className="h-10" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          <NavLinks />



          {/* Auth Buttons / Avatar */}
          {!user ? (
            <div className="flex gap-2">
              <Link to="/auth/login" className="btn btn-sm btn-secondary text-white hover:text-primary">
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-primary"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <div
                className="avatar cursor-pointer flex items-center gap-2"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <div className="w-10 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                  <img
                    src={user.photoURL || "https://i.ibb.co/MBtjqXQ/default-avatar.png"}
                    alt="User Avatar"
                  />
                </div>
              </div>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <div className="px-4 py-2 text-gray-800 font-semibold border-b">
                    {user.displayName || "Anonymous"}
                  </div>
                  <button
                    onClick={handleLogOut}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-3">

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white text-2xl"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary flex flex-col gap-2 pb-4">
          <NavLinks />
          {!user ? (
            <>
              <Link to="/auth/login" className="btn btn-sm btn-secondary text-white w-full">
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-primary w-full"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogOut}
              className="btn btn-sm bg-red-500 text-white w-full"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
