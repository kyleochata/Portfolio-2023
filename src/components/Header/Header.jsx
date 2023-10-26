import { Link } from 'react-router-dom'
import NavBar from '../NavBar'
import style from './Header.module.css'
import img from '../../images/MiamiLogo.svg'

const Header = () => {
  const getClass = `aspect-w-4 aspect-h-1 ${style.divImage} min-h-full`
  return (
    <header className="flex sm:flex-row h-20 justify-between items-center overflow-hidden w-full">
      <div className="w-1/4 sm:w-1/4 lg:w-1/4 h-full sm:h-full flex-shrink-0 pl-3">
        <Link key={1} to="/">
          <div className={getClass}></div>
        </Link>
      </div>

      <NavBar />
    </header>
  )
}
export default Header
