import React from 'react'
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
        <div className="navbar__logo">
            <p>Logo</p>
        </div>
        <div className="navbar__about">
            <p>Erklärung</p>
        </div>
        <div className="navbar__sign-in">
            <button type="button" id="sign-in">Einloggen</button>
        </div>
    </div>
  )
}

export default Navbar