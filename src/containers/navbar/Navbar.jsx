import React from 'react'
import { Link } from 'react-router-dom';

import "./navbar.css";
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const {loginWithRedirect, isAuthenticated} = useAuth0();
  
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
      <Link to="/">Logo</Link>
      </div>
      
      <div className="navbar__about">
        <Link to="/about">Erklärung</Link>
      </div>

      <div className="navbar__sign-in">
        <button type="button" id="sign-in" onClick={() => loginWithRedirect()}>Einloggen</button>
      </div>
    </div>
  )
}

export default Navbar