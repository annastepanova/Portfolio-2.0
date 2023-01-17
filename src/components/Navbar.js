import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import classnames from 'classnames'
import SMLinks from './shared/SocialLinks'
import useScroll from '../hooks/useScroll'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const scroll = useScroll()

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
