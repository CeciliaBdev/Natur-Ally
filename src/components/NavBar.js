import React from 'react'
import { Link } from 'react-scroll'
import accueil from '../assets/accueil.png'
import '../style.scss'

function Navbar() {
  return (
    <div className="navbar">
      <Link
        to="content_home"
        spy={true}
        smooth={true}
        offset={0}
        duration={700}
      >
        <img
          src={accueil}
          alt="logo naturally"
          style={{ paddingLeft: 30, width: 400, height: 75 }}
        />
      </Link>
      <ul>
        <li className="nav-item">
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
          >
            Nos services
          </Link>
        </li>
        <li className="nav-item">
          <Link to="impots" spy={true} smooth={true} offset={0} duration={700}>
            Credits d'impôts
          </Link>
        </li>
        <li className="nav-item">
          <Link to="contact" spy={true} smooth={true} offset={0} duration={700}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
