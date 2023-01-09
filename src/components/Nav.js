// nav page
import { Link } from "react-router-dom";
import { useState } from 'react'

const Nav = () => {

  // const navbarLinks = document.getElementsByClassName('nav-item')
  const [ toggle, setToggle ] = useState(false)


  console.log(toggle)

  return (
    <>
      <div className="toggle-button" onClick={() => {setToggle(!toggle)}}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className='nav-bar'>
        <Link to='/MovieDB' className={`nav-item ${toggle ? "active" : ""}`}><p>Home</p></Link>
        <Link to='/MovieDB/favourites' className={`nav-item ${toggle ? "active" : ""}`}><p>Favourites</p></Link>
        <Link to='/MovieDB/about' className={`nav-item ${toggle ? "active" : ""}`}><p>About</p></Link>
        {/* <Link to=''></Link> */}
      </nav>
    </>
  )
}

export default Nav