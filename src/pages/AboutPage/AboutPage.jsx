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
            <div className={style.ProfileImgContainer}> </div>
            <div className={style.ProfileCardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              officiis porro vel inventore laboriosam nihil consequuntur ipsam
              sunt ipsa aspernatur ducimus quia necessitatibus tempora,
              voluptatibus deserunt qui.
            </div>
          </section>
          <section>
            <div className="card1"></div>
            <div className="card2"></div>
            <div className="card3"></div>
          </section>
        </section>
        <Footer />
      </main>
    </>
  )
}
export default AboutPage
