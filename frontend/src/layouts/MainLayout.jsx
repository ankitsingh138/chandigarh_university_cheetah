import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
