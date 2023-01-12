// nav page
import { Link } from "react-router-dom";

const Nav = ({ toggle }) => {
  return (
    <>
      <nav className={`nav-bar ${toggle ? "active" : ""}`}>
        <Link to="/MovieDB" className="nav-item">
          <p>Home</p>
        </Link>
        <Link to="/MovieDB/favourites" className="nav-item">
          <p>Favourites</p>
        </Link>
        <Link to="/MovieDB/about" className="nav-item">
          <p>About</p>
        </Link>
        {/* <Link to=''></Link> */}
      </nav>
    </>
  );
};

export default Nav;
