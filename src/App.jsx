import { Outlet } from 'react-router-dom'
import MouseFollower from './components/MouseFollower/MouseFollower'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
function App() {
  return (
    <>
      <MouseFollower />
      <Outlet />
    </>
  )
}

export default App
