import Header from '../../components/Header/Header'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import style from './ProjectsPage.module.css'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'
import { projectData } from '../../ProjectData'
import Jate from '../../images/JATE.png'
import WillDo from '../../images/willdo.png'
import ItHelpDesk2 from '../../images/ticket1.png'
import BCompanion from '../../images/brainbalancecompanion.png'
import Blog from '../../images/BlogSite.png'
import Weather from '../../images/weatherApp.png'
import MainProjectCard from '../../components/MainProjectCard/MainProjectCard'

const ProjectsPage = () => {
  const [project, setProject] = useState({
    title: '',
    image: '',
    description: '',
    liveSite: '',
    githubRepo: '',
  })

  const [firstLoad, setFirstLoad] = useState(true)
  const [currentMain, setCurrentMain] = useState('')

  const findImage = () => {
    switch (currentMain) {
      case 'card1':
        return `${Jate}`
      case 'card2':
        return `${WillDo}`
      case 'card3':
        return `${ItHelpDesk2}`
      case 'card4':
        return `${BCompanion}`
      case 'card5':
        return `${Blog}`
      case 'card6':
        return `${Weather}`
      default:
        return ''
    }
  }

  const handleCardClick = ({ target }) => {
    const cardNumber = target.getAttribute('data')
    if (!cardNumber || cardNumber === currentMain) {
      return
    }
    if (firstLoad) {
      setFirstLoad(false)
    }
    switch (cardNumber) {
      case 'card1':
        setProject(projectData[0])
        setCurrentMain('card1')
        break
      case 'card2':
        setProject(projectData[1])
        setCurrentMain('card2')
        break
      case 'card3':
        setProject(projectData[2])
        setCurrentMain('card3')
        break
      case 'card4':
        setProject(projectData[3])
        setCurrentMain('card4')
        break
      case 'card5':
        setProject(projectData[4])
        setCurrentMain('card5')
        break
      case 'card6':
        setProject(projectData[5])
        setCurrentMain('card6')
        break
      default:
        setProject('')
        break
    }
  }

  return (
    <>
      <LoadingScreen />
      <main className={style.ProjectMain}>
        <Header />
        <div className={style.ProjectContainer}>
          <section className={style.ProjectSection}>
            {projectData.map((project) => {
              return (
                <div
                  className={style.ProjectCards}
                  onClick={handleCardClick}
                  data={project.cardNumber}
                >
                  <div
                    className={`${style.OutercardImg} ${style[project.img]}`}
                    data={project.cardNumber}
                  ></div>
                  <h3 data={project.cardNumber}>{project.title}</h3>
                </div>
              )
            })}
            <div className={style.ProjectCards}></div>
            <div className={style.ProjectCards}></div>
            <div className={style.ProjectCardsMain}>
              {!firstLoad && (
                <>
                  <MainProjectCard
                    project={project}
                    findImage={findImage}
                    style={style}
                  />
                </>
              )}
              {firstLoad && (
                <div className={style.LoadMainCard}>
                  <h1 className={style.ProjectMainTitle}>
                    Check out my projects!
                  </h1>
                  <p className={style.LoadingInstruction}>
                    Click on a card to learn more about that project
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
        {/* <Footer /> */}
      </main>
    </>
  )
}

export default ProjectsPage
