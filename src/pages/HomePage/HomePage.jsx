import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import style from './HomePage.module.css'
import LinkContainer from '../../components/LinkContainer'

const HomePage = () => {
  return (
    <>
      <main className={style.homePage}>
        <Header />
        <section>
          <div>put large image with text here</div>
          <div>probably put a text box with my name here?</div>
        </section>
        <LinkContainer />
        <Footer />
      </main>
    </>
  )
}
export default HomePage
