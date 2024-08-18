import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return (<>
  <div className='navbar '>
    <div className="container cont ">
      <div className="text-bav">
        <nav>
          <ul>
            <li>
              <Link  to="startFarameWork">Start Framework</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navlinks">
          <nav>
            <ul>
            <li><NavLink to="about">ABOUT</NavLink></li>
            <li><NavLink to="portfolio">PORTFOLIO</NavLink></li>
            <li><NavLink to="contact">CONTACT</NavLink></li>
          </ul>

          </nav>
      </div>
    </div>
  </div>

</>)
}
