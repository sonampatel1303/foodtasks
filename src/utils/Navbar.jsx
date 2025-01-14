import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    navigate("/"); // Redirect to the login page
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">FoodApp</h1>
      <ul className="navbar-links">
        <li>
            <Link to="/login" className="navbar-link">Login</Link>
        </li>
        <li>
          <Link to="/menu" className="navbar-link">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/order" className="navbar-link">
            Orders
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="navbar-logout">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
