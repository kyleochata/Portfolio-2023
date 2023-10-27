import Header from '../../components/Header/Header'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import Footer from '../../components/Footer/Footer'
// import ProfileCard from '../../components/ProfileCard/ProfileCard'
import style from './AboutPage.module.css'
import profilePic from '../../images/profile-pic.png'

const AboutPage = () => {
  return (
    <>
      <LoadingScreen />
      <main className={style.AboutMain}>
        <Header />
        <section className={style.AboutBody}>
          <section className={style.ProfileCard}>
            <div className={style.ProfileImgContainer}>
              <img
                src={profilePic}
                alt="profile-pic"
                className={style.ProfileImg}
              />
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
            <section className={style.AboutCard} data="1">
              <h3>I love to learn</h3>
              <p>
                Web development and technology has given me the adventure of
                constantly learning something new. Each time I learn something
                new and implement it into one of my projects, it makes me
                hungrier to learn more!
              </p>
            </section>
            <div className={style.CardBtnContainer}>
              <button className={style.CardBtn}> &#60; </button>

              <button className={style.CardBtn}> &#62; </button>
            </div>
          </section>
        </section>
        <Footer />
      </main>
    </>
  )
}
export default AboutPage
