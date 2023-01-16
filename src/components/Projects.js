import React from 'react'
import GITHUB from '../../public/assets/github_outline.svg'
import styles from '../styles/Projects.module.css'

export default function Projects ({ projects }) {

  return (
    <ul className={styles.project_content}>
      {projects?.length > 0 && projects.map((project) => (
        <li key={project.id} className={styles.project_list}>
          <div className={styles.project_card}>
            <header>
              <div className={styles.project_links}>
                <div className={styles.link}>
                  <a href={project.html_url} target='_blank' rel='noopener noreferrer'><GITHUB/></a>
                </div>
              </div>
              <h3 className={styles.project_title}><a href={project.html_url} target='_blank' rel='noopener noreferrer'>{project.name}</a></h3>
              <div>
                <p>{project.description}</p>
              </div>
            </header>
            <footer>
              <ul className={styles.project_topics}>
                {project.topics?.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </footer>
          </div>
        </li>
      ))}
    </ul>
  )
}
