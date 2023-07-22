import React, { useState, prevState } from 'react'
import {Link} from 'react-router-dom'
import '../Styles/NavBarStyle.css'


function NavBar() {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu((prevState) => !prevState)
  }

  return (
    <nav>
      <div className='navbar-logo logo'>
        <div className='title logo'>Being</div>
        <div className='logo-disk'></div>
        <div className='logo-bar'></div>
        <div className='logo-disk'></div>
        <div className='title logo'>FIT</div>
      </div>

      <div>
        <ul id='menu-items' className={menu ? '#menu-items active' : '#menu-items'}  >
          <li className='active'>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/schedules'>Schedules</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>

      <div className="menu-icon" onClick={handleMenu}>
        <i className={menu ? 'fa fa-times' : 'fa fa-bars'}></i>
      </div>

    </nav>
  )
}

export default NavBar