import { useState, useEffect } from "react";
import style from './MouseFollower.module.css'
export default function useFollowMe() {

  const [position, setPosition] = useState({ left: 0, top: 0 })

  useEffect(() => {
    const followMe = document.querySelector(`.${style.FollowMe}`)
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const divWidth = followMe.clientWidth
      const divHeight = followMe.clientHeight
      setPosition({
        left: clientX - divWidth / 2,
        top: clientY - divHeight / 2,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)

    //useEffect clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return { position }
}
