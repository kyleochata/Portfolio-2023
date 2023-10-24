import Header from '../../components/Header'
import Footer from '../../components/Footer'
import style from './HomePage.module.css'
import LinkContainer from '../../components/LinkContainer'

import { useEffect, useState } from 'react'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading)
    }, 1500)
  }, [])
  return (
    <>
      <div
        className={isLoading ? `${style.ScreenLoader}` : `${style.MoveScreen}`}
      ></div>
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
