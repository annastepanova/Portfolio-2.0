import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import classnames from 'classnames'
import SMLinks from './shared/SocialLinks'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const [scroll, setScroll] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground)
    return () => window.removeEventListener("scroll", changeBackground)
  }, [])

  return (
    <nav className={scroll ? classnames(styles.navbar, styles.nav_scroll) : styles.navbar}>
      <div className={styles.nav_container}>
        <ul className={styles.nav_icons}>
        </ul>
        <ul className={styles.navbar_nav}>
          {['home', 'about', 'skills', 'projects', 'contact'].map((link, index) => (
            <li key={index}>
              <Link activeClass='active' to={link} spy={true} smooth={true} duration={500}>
                {link.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
        <SMLinks/>
      </div>
    </nav>
  )
}
