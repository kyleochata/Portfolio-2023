import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import style from './Header.module.css'

const Header = () => {
  return (
    <header>
      <div className={style.headerL}>
        <h4>
          <span>{`{`}</span>Kyle Etrata<span>{`}`}</span>
        </h4>
      </div>
      <NavBar style={style} />
    </header>
  )
}
export default Header
