import React from "react";
import { Link } from "react-router-dom";
import "../scss/nav.scss";

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <Link to="/" className="homelink">
          <img
            className="adorable"
            src="https://i.ibb.co/HPDXXRJ/GOUDAA.png"
            alt="GOUDAA"
            border="0"
          />
        </Link>
        <Link to="/theteam" className="link">
          <li>meet the team</li>
        </Link>
        <Link to="/about" className="link">
          <li>about the app</li>
        </Link>
        <Link to="/create" className="link">
          <li>create new food</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
