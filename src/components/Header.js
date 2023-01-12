// header page

import Nav from "./Nav";
import logo from "../globals/images/app-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className={`header ${toggle ? "active" : ""}`}>
      <div className="header-container">
        <Link to="/MovieDB">
          <img src={logo} alt="Logo for app" className="logo" />
        </Link>
        <div
          className="toggle-button"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <Nav toggle={toggle} />
    </header>
  );
};

export default Header;
