// nav page
import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = ({ toggle }) => {
  return (
    <>
      <nav className={`nav-bar ${toggle ? "active" : ""}`}>
        <Link to="/" className="nav-item">
          <p>Home</p>
        </Link>
        <Link to="/favourites" className="nav-item">
          <p>Favourites</p>
        </Link>
        <Link to="/about" className="nav-item">
          <p>About</p>
        </Link>
        {/* <Link to=''></Link> */}
      </nav>
    </>
  );
};

export default Nav;
