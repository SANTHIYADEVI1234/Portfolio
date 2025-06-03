import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Navbar(pro) {

  return (
    <div>
      <header>
        <p className="logo">{pro.value}</p>
        <nav>
          <ul className="nav-links d-flex gap-3 list-unstyled">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
             <li><Link to="/project">Project</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <button
          className="theme-toggle btn btn-outline-dark"
          onClick={() => pro.setDarkTheme(!pro.darkTheme)}
        >
          <FontAwesomeIcon icon={pro.darkTheme ? faSun : faMoon} />
        </button>
      </header>
   </div>
  );
}

export default Navbar;
