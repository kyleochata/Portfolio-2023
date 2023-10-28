import Header from '../../components/Header/Header'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import style from './ProjectsPage.module.css'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'

const ProjectsPage = () => {
  const [project, setProject] = useState({
    title: '',
    image: '',
    description: '',
    liveSite: '',
    githubRepo: '',
  })
  const [firstLoad, setFirstLoad] = useState(true)

  return (
    <>
      <LoadingScreen />
      <main className={style.ProjectMain}>
        <Header />
        <section className={style.ProjectSection}>
          <div className={style.ProjectCards}>
            <div className={`${style.OutercardImg} ${style.img1}`}></div>
            <h3>Just Another Text Editor</h3>
          </div>
          <div className={style.ProjectCards}>
            <div className={`${style.OutercardImg} ${style.img2}`}></div>
            <h3>I.T. Help Desk</h3>
          </div>
          <div className={style.ProjectCards}>
            <div className={`${style.OutercardImg} ${style.img3}`}></div>
            <h3>Slideshow</h3>
          </div>
          <div className={style.ProjectCards}></div>
          <div className={style.ProjectCards}></div>
          <div className={style.ProjectCards}>
            <div className={`${style.OutercardImg} ${style.img4}`}></div>
            <h3>BB Companion</h3>
          </div>
          <div className={style.ProjectCards}>
            <div className={`${style.OutercardImg} ${style.img5}`}></div>
            <h3>Blog Site</h3>
          </div>
          <div className={style.ProjectCards}>
            <div className={`${style.OutercardImg} ${style.img6}`}></div>
            <h3>Weather Dashboard</h3>
          </div>
          <div className={style.ProjectCardsMain}>
            {!firstLoad && (
              <>
                <div className={style.ProjectMainImg}>Image</div>
                <div className={style.ProjectMainTitle}>Title</div>
                <div className={style.ProjectMainDescription}>Description</div>
                <div className={style.ProjectMainBtn}>
                  <button className={style.ProjectCardMainBtn}>
                    Live Site
                  </button>
                  <button className={style.ProjectCardMainBtn}>
                    Github Repository
                  </button>
                </div>
              </>
            )}
            {firstLoad && (
              <>
                <h1>Check out my projects!</h1>
              </>
            )}
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
export default ProjectsPage
