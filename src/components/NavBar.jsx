import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-evenly items-center w-full sm:w-auto">
      <div className="mr-2">
        <Link key={1} to={'/'}>
          Home
        </Link>
      </div>
      <div className="mr-2">
        <Link key={2} to={'/about'}>
          About
        </Link>
      </div>
      <div className="mr-2">
        <Link key={3} to={'/contact'}>
          Contact
        </Link>
      </div>
      <div className="mr-2">
        <Link key={4} to={'/projects'}>
          Projects
        </Link>
      </div>
      <div className="mr-2">
        <Link key={5} to={'/resume'}>
          Resume
        </Link>
      </div>
    </nav>
  )
}
export default NavBar
