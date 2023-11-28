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
          <p className={style.ContactText}>
            If would like to get in touch for an opportunity or have questions,
            please feel free to reach out to me with the information below.
          </p>
          <div className={style.ContactContainer}>
            <div className={style.CCContainer}>
              <div>Email:</div>
              <div>
                <a
                  href="mailto:kyleochata@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  kyleochata@gmail.com
                </a>
              </div>
            </div>
            <div className={style.CCContainer}>
              <div>Phone:</div>
              <div>1-714-917-9092</div>
            </div>
            <div className={style.CLContainer}>
              <div>LinkedIn</div>
              <div>
                <a
                  href="https://www.linkedin.com/in/kyle-etrata"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/kyle-etrata
                </a>
              </div>
            </div>
            <div className={style.CLContainer}>
              <div>GitHub</div>
              <div>
                <a
                  href="https://github.com/kyleochata"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/kyleochata
                </a>
              </div>
            </div>
            {/* <div className={style.ContactSocial}>
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
            </div> */}
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
export default ContactPage
