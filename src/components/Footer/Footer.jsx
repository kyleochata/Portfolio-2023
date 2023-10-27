import linkedinLogo from '../../images/linkedinIcon.svg'
import gitHubLogo from '../../images/icons8-github-144.svg'
import styles from './Footer.module.css'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [grow, setGrow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setGrow(true)
    }, 1500)
  }, [])

  return (
    <footer className={styles.FooterContainer}>
      <div className={styles.IconContainer}>
        <a
          href="https://www.linkedin.com/in/kyle-etrata"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.imageAnchor}
        >
          <img
            src={linkedinLogo}
            alt="LinkedIn Logo"
            className={grow ? styles.imageAnimation : styles.image}
          />
        </a>
        <a
          href="https://github.com/kyleochata"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.imageAnchor}
        >
          <img
            src={gitHubLogo}
            alt="GitHub Logo"
            className={grow ? styles.imageAnimation : styles.image}
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
