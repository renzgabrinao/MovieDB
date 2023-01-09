// nav page
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav-bar">
            <Link to='/' className="nav-item">Home</Link>
            <Link to='/favourites' className="nav-item">Favourites</Link>
            <Link to='/about' className="nav-item">About</Link>
            {/* <Link to=''></Link> */}
        </nav>
    )
}

export default Nav