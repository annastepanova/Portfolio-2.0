import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.footnote}>
          <p className={styles.footer_copy}>Looking for new exciting opportunites.</p>
          <p>ANNA STEPANOVA <span className={styles.highlight}>©2023</span></p>
        </div>
        <div>
          <p className={styles.footer_copy}>Location</p>
          <p>Miami, FL, United States</p>
        </div>
        <div>
          <p className={styles.footer_copy}>Email</p>  
          <p><a href='mailto:annastepanova1811@gmail.com' target='blank' className={styles.footer_link}>annastepanova1811@gmail.com</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
