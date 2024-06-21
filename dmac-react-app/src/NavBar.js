import React from "react";
import './NavBar.css';
import './index.css';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <div className="App-header border-2 border-gray-900">
        <img className="dmac_Logo" src="/dmac.jpg" alt="DMAC logo" />
        <nav className="nav-container">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="#services" className="nav-link">Services</Link>
          <Link to="#contact" className="nav-link">Contact</Link>
          <Link to="#news" className="nav-link">News</Link>
        </nav>
      </div>
    );
  };

  export default NavBar;