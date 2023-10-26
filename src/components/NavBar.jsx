import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="flex flex-row flex-wrap  justify-evenly items-center w-3/4  overflow-hidden overflow-y-auto h-full">
      <div className=" w-full sm:w-1/5 md:w-1/5 lg:w-1/5 text-center ">
        <Link key={1} to={'/'}>
          Home
        </Link>
      </div>
      <div className=" w-full sm:w-1/5 md:w-1/5 lg:w-1/5 text-center ">
        <Link key={2} to={'/about'}>
          About
        </Link>
      </div>
      <div className=" w-full sm:w-1/5 md:w-1/5 lg:w-1/5 text-center ">
        <Link key={3} to={'/contact'}>
          Contact
        </Link>
      </div>
      <div className=" w-full sm:w-1/5 md:w-1/5 lg:w-1/5 text-center ">
        <Link key={4} to={'/projects'}>
          Projects
        </Link>
      </div>
      <div className=" w-full sm:w-1/5 md:w-1/5 lg:w-1/5 text-center ">
        <Link key={5} to={'/resume'}>
          Resume
        </Link>
      </div>
    </nav>
  )
}
export default NavBar
