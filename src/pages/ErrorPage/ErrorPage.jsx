import { useRouteError } from 'react-router-dom'
import img from '../../images/404CAT.svg'
import style from './ErrorPage.module.css'
const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <div className={style.Error}>
        <img src={img} alt="404 page not found" />
      </div>
    </div>
  )
}
export default ErrorPage
