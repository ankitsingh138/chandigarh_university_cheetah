import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-bg-secondary">
      <Sidebar />
      <main className="ml-64 p-8 min-h-screen">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout

