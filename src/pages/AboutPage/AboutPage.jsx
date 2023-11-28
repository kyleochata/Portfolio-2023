import { useState } from 'react'
import Header from '../../components/Header/Header'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import Footer from '../../components/Footer/Footer'
// import ProfileCard from '../../components/ProfileCard/ProfileCard'
import style from './AboutPage.module.css'
import HtmlBadge from '../../images/HTML5_Badge_512.png'
import JavaScript from '../../images/javascript.png'
import CssBadge from '../../images/cssBadge.png'
import ReactBadge from '../../images/react.png'
import D3 from '../../images/d3.png'
import Handlebars from '../../images/handlebars.png'
import NodeJs from '../../images/nodejs.png'
import Express from '../../images/express.png'
import Sql from '../../images/sql.png'
import Mongo from '../../images/mongo.png'
import Mongoose from '../../images/mongoose.png'
import GraphQl from '../../images/graphql.png'
import Apollo from '../../images/apollo.png'
import Git from '../../images/git.png'
import GitHub from '../../images/githubAbout.png'
import Heroku from '../../images/heroku.png'
import Netlify from '../../images/netlify.png'
import Insomnia from '../../images/insomnia.png'
import VsCode from '../../images/Vscode.png'
import SkillCard from '../../components/Cards/SkillCard'
import ResumeButton from '../../components/ResumeButton/ResumeButton'
const AboutPage = () => {
  const [showFE, setShowFE] = useState(true)
  const [showBE, setShowBE] = useState(true)
  const [showTools, setShowTools] = useState(true)
  const [showWhoAmI, setShowWhoAmI] = useState(true)
  const [showWhy, setShowWhy] = useState(true)
  const [showLooking, setShowLooking] = useState(true)
  const [showEducation, setShowEducation] = useState(true)
  const [showWE, setShowWE] = useState(true)

  const handleScrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleClick = (e) => {
    e.preventDefault()
    switch (e.target.className) {
      case `${style.Hide} FE`:
        setShowFE(!showFE)
        break
      case `${style.Hide} BE`:
        setShowBE(!showBE)
        break
      case `${style.Hide} Tools`:
        setShowTools(!showTools)
        break
      case `${style.Hide} WhoAmI`:
        setShowWhoAmI(!showWhoAmI)
        break
      case `${style.Hide} Why`:
        setShowWhy(!showWhy)
        break
      case `${style.Hide} Looking`:
        setShowLooking(!showLooking)
        break
      case `${style.Hide} Education`:
        setShowEducation(!showEducation)
        break
      case `${style.Hide} WE`:
        setShowWE(!showWE)
        break
      default:
        break
    }
  }

  const frontEndData = [
    {
      name: 'HTML',
      image: HtmlBadge,
    },
    {
      name: 'CSS',
      image: CssBadge,
    },
    {
      name: 'JavaScript',
      image: JavaScript,
    },
    {
      name: 'React',
      image: ReactBadge,
    },
    {
      name: 'D3.js',
      image: D3,
    },
    {
      name: 'Handlebars',
      image: Handlebars,
    },
  ]
  const backEndData = [
    {
      name: 'Node.js',
      image: NodeJs,
    },
    {
      name: 'Express.js',
      image: Express,
    },
    {
      name: 'SQL',
      image: Sql,
    },
    {
      name: 'MongoDB',
      image: Mongo,
    },
    {
      name: 'Mongoose',
      image: Mongoose,
    },
    {
      name: 'GraphQl',
      image: GraphQl,
    },
    {
      name: 'Apollo',
      image: Apollo,
    },
  ]
  const toolsData = [
    {
      name: 'Git',
      image: Git,
    },
    {
      name: 'GitHub',
      image: GitHub,
    },
    {
      name: 'Heroku',
      image: Heroku,
    },
    {
      name: 'Netlify',
      image: Netlify,
    },
    {
      name: 'Insomnia',
      image: Insomnia,
    },
    {
      name: 'VS Code',
      image: VsCode,
    },
  ]
  return (
    <>
      <LoadingScreen />
      <main className={style.AboutMain}>
        <Header />
        <section className={style.AboutSection}>
          <div className={style.Banner}>
            <ResumeButton style={style} />
          </div>
          <section className={style.ASGroup}>
            <h2 className={style.AboutSectionTitle}>About Me</h2>
            <div className={style.ASGContainerL}>
              <div className={style.AGroupContainer}>
                <h3>Who Am I?</h3>
                <div onClick={handleClick} className={`${style.Hide} WhoAmI`}>
                  {showWhoAmI ? 'Less' : 'More'}
                </div>
              </div>
              <div className={style.ASGTextContainer}>
                {showWhoAmI && (
                  <p className={style.ASGText}>
                    A passionate developer always looking to learn something
                    new! I am a full stack developer with a background in STEM
                    and a passion for problem solving. I am always looking for
                    new challenges and opportunities to grow.
                  </p>
                )}
                {!showWhoAmI && (
                  <p className={style.ASGTextMin}>
                    A passionate developer always looking to learn something
                    new!
                  </p>
                )}
              </div>
            </div>
            <div className={style.ASGContainerR}>
              <div className={style.AGroupContainer}>
                <div onClick={handleClick} className={`${style.Hide} Why`}>
                  {showWhy ? 'Less' : 'More'}
                </div>
                <h3>Why Software Development?</h3>
              </div>
              <div className={style.ASGTextContainer}>
                {showWhy && (
                  <p className={style.ASGText}>
                    From the countless programs, libraries and frameworks, there
                    is no shortage of things to learn and master. This deeply
                    satisfy my curiosity and love for learning and what makes
                    this field so exciting to me.
                    <br />
                    On top of that, the freedom that software development gives
                    on tackling a problem is what makes it so fun. There is no
                    one way to solve a problem, only better solutions. Being
                    creative and coming up with novel solutions to a problem is
                    what I love about software development.
                  </p>
                )}
                {!showWhy && (
                  <p className={style.ASGTextMin}>
                    There is always something new to learn and many ways to
                    approach a problem.
                  </p>
                )}
              </div>
            </div>
            <div className={style.ASGContainerL}>
              <div className={style.AGroupContainer}>
                <h3>What Am I Looking For?</h3>
                <div onClick={handleClick} className={`${style.Hide} Looking`}>
                  {showLooking ? 'Less' : 'More'}
                </div>
              </div>
              <div className={style.ASGTextContainer}>
                {showLooking && (
                  <p className={style.ASGText}>
                    I am looking for a position where I can grow as a developer
                    and be part of a team that is passionate about what they do.
                    <br />
                    Being welcomed into an environment that encourages questions
                    and learning, yet also challenges me to be better are the
                    qualities I am looking for in a company.
                  </p>
                )}
                {!showLooking && (
                  <p className={style.ASGTextMin}>
                    Growth, Collaborative Environment, Passionate Teammates
                  </p>
                )}
              </div>
            </div>
          </section>
          <section className={style.ASGroup}>
            <h2 className={style.AboutSectionTitleR}>Skills</h2>
            <div className={style.ASGContainerL}>
              <div className={style.AGroupContainer}>
                <h3>Front End</h3>
                <div onClick={handleClick} className={`${style.Hide} FE`}>
                  {showFE ? 'Hide' : 'Show'}
                </div>
              </div>
              {showFE && (
                <div className={style.SkillCardContainer}>
                  {frontEndData.map((skill) => {
                    return (
                      <SkillCard skill={skill} style={style} key={skill.name} />
                    )
                  })}
                </div>
              )}
            </div>
            <div className={style.ASGContainerR}>
              <div className={style.AGroupContainer}>
                <div onClick={handleClick} className={`${style.Hide} BE`}>
                  {showBE ? 'Hide' : 'Show'}
                </div>
                <h3>Back End</h3>
              </div>
              {showBE && (
                <div className={style.SkillCardContainer}>
                  {backEndData.map((skill) => {
                    return (
                      <SkillCard skill={skill} style={style} key={skill.name} />
                    )
                  })}
                </div>
              )}
            </div>
            <div className={style.ASGContainerL}>
              <div className={style.AGroupContainer}>
                <h3>Tools</h3>
                <div onClick={handleClick} className={`${style.Hide} Tools`}>
                  {showTools ? 'Hide' : 'Show'}
                </div>
              </div>
              {showTools && (
                <div className={style.SkillCardContainer}>
                  {toolsData.map((skill) => {
                    return (
                      <SkillCard skill={skill} style={style} key={skill.name} />
                    )
                  })}
                </div>
              )}
            </div>
          </section>
          <section className={style.ASGroup}>
            <h2 className={style.AboutSectionTitle}>Experience</h2>
            <div className={style.ASGContainerL}>
              <div className={style.AGroupContainer}>
                <h3>Education</h3>
                <div
                  className={`${style.Hide} Education`}
                  onClick={handleClick}
                >
                  {showEducation ? 'Less' : 'More'}
                </div>
              </div>
              <div className={style.ASGTextContainer}>
                {showEducation && (
                  <p className={style.ASGText}>
                    <strong>edX || University of California, Irvine</strong>
                    <br />
                    <em>Full Stack Web Development, Certificate</em>
                    <br />
                    <em>2023</em>
                    <br />
                    <br />
                    <strong>Loyola Marymount University</strong>
                    <br />
                    <em>Bachelor of Science, Biological Sciences</em>
                    <br />
                    <em>2015</em>
                  </p>
                )}
                {!showEducation && (
                  <p className={style.ASGTextMin}>
                    <strong>Full Stack Web Development</strong>
                    <br />
                    <em>Certificate, 2023</em>
                    <br />
                    <strong>Biochemistry, B.S</strong>
                    <br />
                    <em>Bachelor of Science, 2015</em>
                  </p>
                )}
              </div>
            </div>
            <div className={style.ASGContainerR}>
              <div className={style.AGroupContainer}>
                <div onClick={handleClick} className={`${style.Hide} WE`}>
                  {showWE ? 'Less' : 'More'}
                </div>
                <h3>Work Experience</h3>
              </div>
              <div className={style.ASGTextContainer}>
                {showWE && (
                  <p className={style.ASGText}>
                    <strong>St. George's University, M.D Program</strong>
                    <br />
                    <br />
                    <em>Student, 2020 - 2023</em>
                    <br />
                    <em></em>
                    <p>
                      Soft Skills: Problem-Solving, Agile philosophy,
                      Time-management, Communication, Research, Customer Service
                      / Patient Care, Teamwork, Leadership
                    </p>
                    <br />
                    <br />
                    <strong>Arthrex, Inc. || SportsTek Medical</strong>
                    <br />
                    <br />
                    <em>Medical Education Director: 2020</em>
                    <br />
                    <p>
                      Soft Skills: Problem-solving, Data Analysis,
                      Time-management, Communication, Research, Data
                      Presentation, Training
                    </p>
                    <br />
                    <em>Senior Medical Device Sales: 2016-2020</em>
                    <br />
                    <p>
                      Soft Skills: Problem-Solving, Communication, Creativity,
                      Research, Customer Service, Teamwork, Leadership,
                      Time-management
                    </p>
                    <br />
                    <em>Associate Medical Device Sales: 2016</em>
                    <br />
                    <p>
                      Soft Skills: Communication, Research, Customer Service,
                      Teamwork, Leadership, Time-management
                    </p>
                  </p>
                )}
                {!showWE && (
                  <p className={style.ASGTextMin}>
                    <strong>
                      Soft Skills:
                      <br />
                      <br />
                      Problem Solving, Communication, Teamwork, Leadership,
                      Time-management, Research, Customer-Service, Training,
                      Data Presentation
                    </strong>
                  </p>
                )}
              </div>
            </div>
          </section>
        </section>
        <div className={style.backToTop}>
          <a href="#" onClick={handleScrollToTop}>
            Back to Top
          </a>
        </div>
        {/* <Footer /> */}
      </main>
    </>
  )
}
export default AboutPage
