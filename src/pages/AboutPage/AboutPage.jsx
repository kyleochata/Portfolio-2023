import Header from '../../components/Header/Header'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import Footer from '../../components/Footer/Footer'
// import ProfileCard from '../../components/ProfileCard/ProfileCard'
import style from './AboutPage.module.css'
import profilePic from '../../images/profile-pic.png'
import { useState } from 'react'
const AboutPage = () => {
  const [renderCard, setRenderCard] = useState(1)
  const [lastToLeft, setLastToLeft] = useState(0)

  const cardRenderClass = () => {
    if (renderCard === 1 && lastToLeft === 0) {
      return style.AboutCardComeInR
    }
    if (renderCard > 1) {
      return style.AboutCardStayL
    }
    if (renderCard === 1 && lastToLeft === 0) {
      return style.AboutCardComeInL
    }
  }
  const leftButtonHandle = () => {
    setLastToLeft(lastToLeft - 1)
    setRenderCard(renderCard - 1)
  }
  const rightButtonHandle = () => {
    if (renderCard === 3) {
      return
    }
    // const removeCardLeft = renderCard - 1
    setLastToLeft(lastToLeft + 1)
    setRenderCard(renderCard + 1)
    cardRenderClass()
  }
  return (
    <>
      <LoadingScreen />
      <main className={style.AboutMain}>
        <Header />
        <section className={style.AboutBody}>
          <section className={style.ProfileCard}>
            <div className={style.ProfileImgContainer}>
              {/* <img
                src={profilePic}
                alt="profile-pic"
                className={style.ProfileImg}
              /> */}
            </div>
            <div className={style.ProfileCardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              officiis porro vel inventore laboriosam nihil consequuntur ipsam
              sunt ipsa aspernatur ducimus quia necessitatibus tempora,
              voluptatibus deserunt qui. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Natus, sint corporis eligendi ipsa provident
              voluptas nostrum eaque omnis corrupti quisquam ullam consequatur
              voluptates neque architecto. Dicta rem iste officia nobis.
            </div>
          </section>
          <section className={style.AboutRight}>
            <div className={style.AboutRBg}></div>
            <section className={cardRenderClass()} data="1">
              <h3>I love to learn</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                amet recusandae sint minus veritatis voluptas, aliquid nam
                suscipit impedit pariatur quam soluta similique vel ex!
                Architecto facilis molestiae animi ratione?
              </p>
            </section>
            <section className={style.AboutCardComeIn} data="2">
              <h3>I love to learn</h3>
              <p>
                Web development and technology has given me the adventure of
                constantly learning something new. Each time I learn something
                new and implement it into one of my projects, it makes me
                hungrier to learn more!
              </p>
            </section>
            <div className={style.CardBtnContainer}>
              {renderCard !== 1 && (
                <button className={style.CardBtn} onClick={leftButtonHandle}>
                  {' '}
                  &#60;{' '}
                </button>
              )}

              <button className={style.CardBtn} onClick={rightButtonHandle}>
                {' '}
                &#62;{' '}
              </button>
            </div>
          </section>
        </section>
        <Footer />
      </main>
    </>
  )
}
export default AboutPage
