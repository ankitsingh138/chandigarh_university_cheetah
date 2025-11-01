import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import DashboardLayout from '../layouts/DashboardLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Insurance from '../pages/Insurance'
import EmergencyShop from '../pages/EmergencyShop'
import SecurityGuide from '../pages/SecurityGuide'
import SafetyAssistant from '../pages/SafetyAssistant'

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth pages (no navbar) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Dashboard pages (with sidebar) */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        {/* Placeholder routes for other dashboard pages */}
        <Route path="safety-assistant" element={<SafetyAssistant />} />
        <Route path="weather-alerts" element={<div className="p-8"><h1 className="text-2xl text-text-primary">Weather Alerts - Coming Soon</h1></div>} />
        <Route path="insurance" element={<Insurance />} />
        <Route path="emergency-shop" element={<EmergencyShop />} />
        <Route path="security-guide" element={<SecurityGuide />} />
      </Route>
      
      {/* Main app pages (with navbar) */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
