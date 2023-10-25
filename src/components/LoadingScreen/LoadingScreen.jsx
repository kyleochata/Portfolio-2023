import { useState, useEffect } from 'react'
import style from './LoadingScreen.module.css'
import logo from '../../images/MiamiLogo.svg'

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading)
    }, 1500)
    setTimeout(() => {
      const hideDiv = document.querySelectorAll('.hideUs')
      for (const div of hideDiv) {
        div.style.width = 0
        div.style.height = 0
      }
    }, 3250)
  }, [])
  return (
    <>
      <div
        className={
          isLoading
            ? `${style.ScreenLoaderFifth}`
            : `${style.MoveScreenUpOne} hideUs`
        }
      ></div>
      <div
        className={
          isLoading
            ? `${style.ScreenLoaderFifth}`
            : `${style.MoveScreenDownOne} hideUs`
        }
      ></div>
      <div
        className={
          isLoading
            ? `${style.ScreenLoaderFifth}`
            : `${style.MoveScreenUpTwo} hideUs`
        }
      ></div>
      <div
        className={
          isLoading
            ? `${style.ScreenLoaderFifth}`
            : `${style.MoveScreenDownTwo} hideUs`
        }
      ></div>
      <div
        className={
          isLoading
            ? `${style.ScreenLoaderFifthLast}`
            : `${style.MoveScreenUpThree} hideUs`
        }
      ></div>
    </>
  )
}
export default LoadingScreen
