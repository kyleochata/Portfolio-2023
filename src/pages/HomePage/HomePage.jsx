import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import style from './HomePage.module.css'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import image from '../../images/HomeImage.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [content, setContent] = useState(`I like to build cool websites.`)
  const [hover, setHover] = useState('')
  const hoverList = ({ target }) => {
    if (target.innerText === hover) {
      return
    }
    switch (target.innerText) {
      case 'About Me':
        setContent(
          `I'm a software developer with a passion for building beautiful, functional websites.`
        )
        setHover('About Me')
        break
      case 'Projects':
        setContent(`Check out some of the projects I've worked on.`)
        setHover('Projects')
        break
      case 'Contact':
        setContent(`I'd love to hear from you!`)
        setHover('Contact')
        break
      case 'Resume':
        setContent(`Check out my resume!`)
        setHover('Resume')
        break
      default:
        setContent(`I like to build cool websites.`)
        setHover('')
        break
    }
  }

  return (
    <>
      <LoadingScreen />
      <main className={style.homePage}>
        <Header />
        <div className={style.MiddleContainer}>
          <section className={style.MiddleLeft}>
            <div className={style.ImgContainer} onMouseEnter={hoverList}>
              <div className={style.HomeImg}></div>
            </div>
            <div className={style.MiddleLeftText}>
              <div className={style.innerText}>
                <h1>Hi! I'm Kyle</h1>
                {content}
              </div>
            </div>
          </section>
          <section className={style.MiddleRight}>
            <h2>Explore Kyle</h2>
            <ul className={style.ListContainerRight}>
              <li onMouseEnter={hoverList}>
                <div> About Me</div>
                {hover === 'About Me' && (
                  <button>
                    <Link to="/about">Click to learn more</Link>
                  </button>
                )}
              </li>
              <li onMouseEnter={hoverList}>
                <div> Projects</div>
                {hover === 'Projects' && (
                  <button>
                    <Link to="/projects">Discover my Projects</Link>
                  </button>
                )}
              </li>
              <li onMouseEnter={hoverList}>
                <div>Contact</div>
                {hover === 'Contact' && (
                  <button>
                    <Link to="/contact">Go to Contact Page</Link>
                  </button>
                )}
              </li>
              <li onMouseEnter={hoverList}>
                <div>Resume</div>
                {hover === 'Resume' && (
                  <button>
                    <Link to="/resume">View my Resume</Link>
                  </button>
                )}
              </li>
            </ul>
          </section>
        </div>
        <Footer />
      </main>
    </>
  )
}
export default HomePage
