import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Link to="/" className="nav__item">
        Home
      </Link>
      <Link to="/about" className="nav__item">
        About
      </Link>
    </div>
  );
};

export default Navbar;
