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
// import { Link } from 'react-router-dom'
// import { useState } from 'react'
// // import style from './NavBar.module.css'

// // const NavBar = ({ style }) => {
// //   const [showMenu, setShowMenu] = useState(window.innerWidth <= 800)
// //   // return (
// //   const toggleMenu = () => {
// //     setShowMenu(!showMenu)
// //   }

// //   return (
// //     <nav className={style.headerR}>
// //       <div className="menu-icon" onClick={toggleMenu}>
// //         ☰
// //       </div>
// //       {showMenu && (
// //         <>
// //           <div>
// //             <Link key={1} to={'/'}>
// //               Home
// //             </Link>
// //           </div>
// //           <div>
// //             <Link key={2} to={'/about'}>
// //               About
// //             </Link>
// //           </div>
// //           <div>
// //             <Link key={3} to={'/contact'}>
// //               Contact
// //             </Link>
// //           </div>
// //           <div>
// //             <Link key={4} to={'/projects'}>
// //               Projects
// //             </Link>
// //           </div>
// //           <button onClick={handleDownload}>Resume</button>
// //         </>
// //       )}
// //     </nav>
// //   )
// //   //   <nav className={style.headerR}>
// //   //     <div>
// //   //       {' '}
// //   //       <Link key={1} to={'/'}>
// //   //         Home
// //   //       </Link>
// //   //     </div>
// //   //     <div>
// //   //       {' '}
// //   //       <Link key={2} to={'/about'}>
// //   //         About
// //   //       </Link>
// //   //     </div>
// //   //     <div>
// //   //       {' '}
// //   //       <Link key={3} to={'/contact'}>
// //   //         Contact
// //   //       </Link>
// //   //     </div>
// //   //     <div>
// //   //       {' '}
// //   //       <Link key={4} to={'/projects'}>
// //   //         Projects
// //   //       </Link>
// //   //     </div>
// //   //     <button onClick={handleDownload}>Resume</button>
// //   //   </nav>
// // }
// const NavBar = ({ style }) => {
//   const [showMenu, setShowMenu] = useState(false)
//   const [largeScreen, setLargeScreen] = useState(window.innerWidth > 600)

//   const handleDownload = () => {
//     const pdfPath = '../../../public/resume.pdf'
//     window.open(pdfPath, '_blank')
//   }

//   const toggleMenu = () => {
//     setShowMenu(!showMenu)
//   }

//   const closeMenu = () => {
//     setShowMenu(false)
//   }

//   return (
//     <nav className={style.headerR}>
//       {!largeScreen && (
//         <>
//           <div>
//             <Link key={1} to={'/'}>
//               Home
//             </Link>
//           </div>
//           <div>
//             <Link key={2} to={'/about'}>
//               About
//             </Link>
//           </div>
//           <div>
//             <Link key={3} to={'/contact'}>
//               Contact
//             </Link>
//           </div>
//           <div>
//             <Link key={4} to={'/projects'}>
//               Projects
//             </Link>
//           </div>
//           <button onClick={handleDownload}>Resume</button>
//         </>
//       )}
//       {largeScreen < 800 && (
//       <div className="menu-icon" onClick={toggleMenu}>
//         ☰
//       </div>
//       {showMenu && (
//         <div className={`header-links`}>
//           <div>
//             <Link to={'/'} onClick={() => setShowMenu(false)}>
//               Home
//             </Link>
//           </div>
//           <div>
//             <Link to={'/about'} onClick={() => setShowMenu(false)}>
//               About
//             </Link>
//           </div>
//           <div>
//             <Link to={'/contact'} onClick={() => setShowMenu(false)}>
//               Contact
//             </Link>
//           </div>
//           <div>
//             <Link to={'/projects'} onClick={() => setShowMenu(false)}>
//               Projects
//             </Link>
//           </div>
//           <button onClick={handleDownload}>Resume</button>
//         </div>
//       )}
//       )}
//     </nav>
//   )
// }
// export default NavBar
