import React from 'react'
import { Link } from 'gatsby'
const Navbar = () => {
    return <nav>
        <div className= "nav-container">
            <div className= "nav-item nav-item1">
                <Link to="/home" className="nav-links">
                    Home
                </Link>
                <Link to="/about" className="nav-links">
                    About
                </Link>
                <Link to="/contact" className="nav-links">
                    Contact
                </Link>
            </div>

            <div className= "nav-item nav-item2">
                <Link to="/" className="nav-links">
                    PHOTOFEE
                </Link>
            </div>

            <div className= "nav-item nav-item3">
                <Link to="/blog" className="nav-links">
                    Blog
                </Link>
                <Link to="/gallery" className="nav-links">
                    Gallery
                </Link>
            </div>
        </div>
    </nav>
}

export default Navbar
