import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Link } from 'react-scroll'
import classnames from 'classnames'
import { Grid, Box, useMediaQuery, Button } from '@mui/material'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import MobileNavbar from '../components/MobileNavbar'
import myPic from '../../public/assets/me.png'
import { skills, additionalSkills } from '../constants'

import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'

export default function Home({ projects }) {
  const mobileScreen = useMediaQuery('(max-width:770px)')
  const desktopScreen = useMediaQuery('(min-width:771px)')
  const [show, setShow] = React.useState(false)

  const renderSkills = () => {
    if (mobileScreen) {
      return (
        <>
          <Box className={styles.skills_container}>
            {skills.map((skill, index) => (
              <Box className={styles.skill_box} key={index}>
                <Grid container justifyContent='center'>
                  <Grid item className={styles.icon}>
                    <skill.logo/>
                  </Grid>
                  <Grid item>
                    <h6>{skill.title}</h6>
                  </Grid>
                </Grid>
              </Box>
            ))}
            {show && additionalSkills.map((skill, index) => (
              <Box className={styles.skill_box} key={index}>
                <Grid container justifyContent='center'>
                  <Grid item className={styles.icon}>
                    <skill.logo/>
                  </Grid>
                  <Grid item>
                    <h6>{skill.title}</h6>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
          <Grid container justifyContent='center'>
            <Button 
              variant='outlined' 
              onClick={() => setShow((prev) => !prev)} 
              className={styles.resume_btn} 
              sx={{
                margin: '80px auto 0', 
                "&:hover": {
                  border: 'none'
                }
              }}
            >
              {show ? 'SHOW LESS' : 'SHOW MORE'}
            </Button>
          </Grid>
         
        </>
      )
    }
    return (
      <Box className={styles.skills_container}>
        {[...skills, ...additionalSkills].map((skill, index) => (
          <Box className={styles.skill_box} key={index}>
            <Grid container justifyContent='center'>
              <Grid item className={styles.icon}>
                <skill.logo/>
              </Grid>
              <Grid item>
                <h6>{skill.title}</h6>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>            
    )
  }


  return (
    <div>
      <Head>
        <title>Anna Stepanova Portfolio</title>
        <meta name='description' content='Software Developer Anna Stepanova portfolio site' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {mobileScreen ? <MobileNavbar/> : desktopScreen ? <Navbar/> : null}
        <section id='home' className={classnames(styles.bg_home, 'section')}>
          <div className={styles.bg_overlay}></div>
          <div className={styles.home_section}>
            <div className={styles.title_wrapper}>
              <div className={styles.title_container}>
                <h6 className={styles.home_title}>Anna Stepanova</h6>
                <p>SOFTWARE DEVELOPER</p>
                <div style={{ margin: '42px 0' }}>
                  <a href='https://drive.google.com/file/d/1iezP78TsDODoS2rj9X-IL4fTEt4Pvymm/view?usp=sharing' target='blank' title='resume' className={styles.resume_btn}>
                    RESUME
                  </a>
                </div>
              </div>
            </div>
            <Link className={styles.scroll_icon} to='about' spy={true} smooth={true} duration={500}>
              <span></span>
            </Link>
          </div>
        </section>

        <section id='about' className='section'>
          <Box className={styles.section_wrapper}>
            <Grid container justifyContent='center'>
              <h3 className={styles.section_title}>ABOUT ME</h3>
            </Grid>
            <Grid container alignItems='center' justifyContent='space-between' className={styles.section_content}>
              <Grid item lg={5} md={5} sm={6} className={styles.imageContainer}>
                <Image alt='self' src={myPic}/>
              </Grid>
              <Grid item lg={6} md={6} sm={12} className={styles.intro_text}>
                <p>Hey there!👋 My name is Anna. I am a front-end developer specializing in building interactive digital experiences.</p>
                <p>{'After graduating from Wyncode Academy in January 2020, I\'ve been working primarily in web application development using programing languages and frameworks such as Javascript, Typescript, React, Next.js.🧑🏻‍💻'}</p>
                <p>I am constantly pursuing my passion to learn more about programming languages, frameworks and techniques in order to become a more well-rounded software developer. I am based in Miami, Florida 🌴</p>
                <p style={{ fontStyle: 'italic' }}>#Never Stop Learning</p>
              </Grid>
            </Grid>
          </Box>
        </section>

        <section id='skills' className={classnames('section', styles.bg_light)}>
          <Box className={styles.section_wrapper}>
            <Grid container justifyContent='center'>
              <h3 className={styles.section_title}>SKILLS</h3>
            </Grid>
            {renderSkills()}
          </Box>
        </section>

        <section id='projects' className='section'>
          <Box className={styles.project_section}>
            <Grid container justifyContent='center'>
              <h3 className={styles.section_title}>GITHUB PROJECTS</h3>
            </Grid>
            <Projects projects={projects}/>
          </Box>
        </section>

        <section id='contact' className='section'>
          <Box className={styles.section_wrapper}>
            <Grid container justifyContent='center'>
              <h3 className={styles.section_title}>CONTACT ME</h3>
            </Grid>
            <Contact/>
          </Box>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
  const response = await fetch('https://api.github.com/users/ANNASTEPANOVA/starred?per_page=13&sort=created&direction=desc')
  const data = await response.json()
  const projects = data.filter((p) => p.name !== 'wundergraph')

  return {
    props: {
      projects
    }
  }
} 
