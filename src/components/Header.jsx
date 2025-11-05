import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Header</Link>
        <ul>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
