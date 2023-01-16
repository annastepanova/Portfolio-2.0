import React from 'react'
import Image from 'next/image'
import linkedin from '../../../public/assets/linkedin.png'
import github from '../../../public/assets/github.png'
import email from '../../../public/assets/email.png'

import styles from '../../styles/Navbar.module.css'

export default function Links() {

  return (
    <ul className={styles.nav_icons}>
      <li>
        <a href='https://www.linkedin.com/in/annastepanova1811' target='blank' title='linkedin'>
          <Image width={15} height={15} src={linkedin} alt='linkedin' />
        </a>
      </li>
      <li>
        <a href='https://github.com/annastepanova' target='blank' title='github'>
          <Image width={15} height={15} src={github} alt='github' />
        </a>
      </li>
      <li>
        <a href='mailto:annastepanova1811@gmail.com' target='blank' title='email'>
          <Image width={15} height={15} src={email} alt='email' />
        </a>
      </li>
    </ul>
  )
}
