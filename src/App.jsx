import { Outlet } from 'react-router-dom'
import MouseFollower from './components/MouseFollower/MouseFollower'
function App() {
  return (
    <>
      <MouseFollower />
      <Outlet />
    </>
  )
}

export default App
