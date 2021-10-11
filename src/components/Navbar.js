import React from "react";
import { Link } from "gatsby";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-item nav-item1">
          <Link to="/" className="nav-links">
            Home
          </Link>
          <Link to="/about" className="nav-links">
            About
          </Link>
          <Link to="/contact" className="nav-links">
            Contact
          </Link>
        </div>

        <div className="nav-item nav-item2">
          <Link to="/" className="nav-links">
            PHOTOFEE
          </Link>
        </div>

        <div className="nav-item nav-item3">
          <Link to="/blogs" className="nav-links">
            Blog
          </Link>
          <Link to="/gallery" className="nav-links">
            Gallery
          </Link>
        </div>
        <FaFacebook />
        <AiFillInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
