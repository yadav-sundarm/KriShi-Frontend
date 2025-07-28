import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="nav">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Our Products</Link>
        </li>

        {user ? (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
