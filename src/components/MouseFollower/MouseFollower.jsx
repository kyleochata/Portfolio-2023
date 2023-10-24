import style from './MouseFollower.module.css'
import useFollowMe from './followme'

const MouseFollower = () => {
  const { position } = useFollowMe()
  return (
    <div
      className={`${style.FollowMe}`}
      style={{ left: position.left, top: position.top }}
    ></div>
  )
}
export default MouseFollower
