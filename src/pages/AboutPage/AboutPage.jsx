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
            <div className={style.cardRowHalf}>
              <div className={`${style.cardHalf} sm:w-full md:w-1/2`}>
                <div className={style.cardHalfContent}>
                  <img></img>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    officiis eius reprehenderit suscipit neque hic explicabo
                    sunt. Impedit consequuntur pariatur quas quasi nostrum cum
                    tempora, quam, error molestias unde accusamus?
                  </p>
                  <div>
                    <div>
                      <button>
                        <a>Live Site</a>
                      </button>
                    </div>
                    <div>
                      <button>
                        <a>GitHub Repo</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${style.cardHalf} sm:w-full md:w-1/2`}>
                <div className={style.cardHalfContent}>
                  <img></img>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    officiis eius reprehenderit suscipit neque hic explicabo
                    sunt. Impedit consequuntur pariatur quas quasi nostrum cum
                    tempora, quam, error molestias unde accusamus?
                  </p>
                  <div>
                    <div>
                      <button>
                        <a>Live Site</a>
                      </button>
                    </div>
                    <div>
                      <button>
                        <a>GitHub Repo</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.cardThreeFourth}>
              <img></img>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                officiis eius reprehenderit suscipit neque hic explicabo sunt.
                Impedit consequuntur pariatur quas quasi nostrum cum tempora,
                quam, error molestias unde accusamus?
              </p>
              <div>
                <div>
                  <button>
                    <a>Live Site</a>
                  </button>
                </div>
                <div>
                  <button>
                    <a>GitHub Repo</a>
                  </button>
                </div>
              </div>
            </div>
            <div className={style.cardOneFourth}>
              <img></img>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                officiis eius reprehenderit suscipit neque hic explicabo sunt.
                Impedit consequuntur pariatur quas quasi nostrum cum tempora,
                quam, error molestias unde accusamus?
              </p>
              <div>
                <div>
                  <button>
                    <a>Live Site</a>
                  </button>
                </div>
                <div>
                  <button>
                    <a>GitHub Repo</a>
                  </button>
                </div>
              </div>
            </div>
            <div className={style.cardFull}>
              <img></img>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                officiis eius reprehenderit suscipit neque hic explicabo sunt.
                Impedit consequuntur pariatur quas quasi nostrum cum tempora,
                quam, error molestias unde accusamus?
              </p>
              <div>
                <div>
                  <button>
                    <a>Live Site</a>
                  </button>
                </div>
                <div>
                  <button>
                    <a>GitHub Repo</a>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </main>
    </>
  )
}
export default AboutPage
