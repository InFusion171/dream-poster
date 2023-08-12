import React from 'react'
import { Link } from 'react-router-dom';

import "./navbar.css";

const Navbar = () => {
  
  return (
    <>
      <div className="navbar__container">
        <div className="navbar__logo">
        <Link to="/">Logo</Link>
        </div>
        
        <div className="navbar__about">
          <Link to="/about">Erklärung</Link>
        </div>
      </div>
      
      <hr />
    </>
  )
}

export default Navbar