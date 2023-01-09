// header page

import Nav from './Nav'
import logo from '../globals/images/app-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <Link to='/moviedb'><img src={logo} alt='Logo for app' className='logo'/></Link>
      <Nav/>
    </header>
  )
}

export default Header