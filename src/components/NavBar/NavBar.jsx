import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import KeResume from '/resume.pdf'

const NavBar = ({ style }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [largeScreen, setLargeScreen] = useState(window.innerWidth > 600)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    const handleResize = () => {
      setLargeScreen(window.innerWidth > 600)
    }

    // Initial check on component mount
    handleResize()

    // Listen for window resize events
    window.addEventListener('resize', handleResize)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className={style.headerR}>
      {largeScreen && (
        <>
          <div>
            <Link key={1} to={'/'}>
              Home
            </Link>
          </div>
          <div>
            <Link key={2} to={'/about'}>
              About
            </Link>
          </div>
          <div>
            <Link key={3} to={'/contact'}>
              Contact
            </Link>
          </div>
          <div>
            <Link key={4} to={'/projects'}>
              Projects
            </Link>
          </div>
          <div className={style.btnHolder}>
            <button>
              <a href={KeResume} download="Kyle Etrata Resume">
                Resume
              </a>
            </button>
          </div>
        </>
      )}
      {!largeScreen && (
        <div className={style.menuIcon} onClick={toggleMenu}>
          ☰
        </div>
      )}
      {!largeScreen && showMenu && (
        <div className={style.NBLinkContainer}>
          <div>
            <Link to={'/'} onClick={() => setShowMenu(false)}>
              Home
            </Link>
          </div>
          <div>
            <Link to={'/about'} onClick={() => setShowMenu(false)}>
              About
            </Link>
          </div>
          <div>
            <Link to={'/contact'} onClick={() => setShowMenu(false)}>
              Contact
            </Link>
          </div>
          <div>
            <Link to={'/projects'} onClick={() => setShowMenu(false)}>
              Projects
            </Link>
          </div>
          <div className={style.btnHolder}>
            <a href={KeResume} download="Kyle Etrata Resume">
              <button>Resume</button>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
