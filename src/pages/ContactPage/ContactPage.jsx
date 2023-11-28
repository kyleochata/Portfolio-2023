import Header from '../../components/Header/Header'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import Footer from '../../components/Footer/Footer'
import style from './ContactPage.module.css'
const ContactPage = () => {
  return (
    <>
      <LoadingScreen />
      <main className={style.ContactMain}>
        <Header />
        <section className={style.ContactSection}>
          <h1 className={style.ContactTitle}>Contact Me</h1>
          <div className={style.ContactContainer}>
            <div className={style.ContactEmail}>kyleochata@gmail.com</div>
            <div className={style.ContactPhone}>1-714-917-9092</div>
            <div className={style.ContactSocial}>
              <div className={style.ContactLinks}>
                Linked:
                <a
                  href="https://www.linkedin.com/in/kyle-etrata"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.linkedin.com/in/kyle-etrata
                </a>
              </div>
              <div className={style.ContactLinks}>
                GitHub:
                <a
                  href="https://github.com/kyleochata"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.github.com/kyleochata
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
export default ContactPage
