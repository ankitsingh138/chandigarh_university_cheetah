import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

// Lightning Bolt Logo SVG Component (yellow accent)
const LightningIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-yellow-400"
  >
    <path
      d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const AuthLayout = ({ children, activeTab = 'login' }) => {
  const location = useLocation()
  const isLogin = location.pathname === '/login'

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-secondary px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-bg-primary rounded-2xl shadow-2xl p-8 md:p-10 space-y-6"
      >
        {/* Logo and Title */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <LightningIcon />
          <span className="text-2xl md:text-3xl font-semibold text-text-primary">
            ResQ
          </span>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-8">
          <Link
            to="/login"
            className={`flex-1 py-3 px-4 rounded-lg text-center font-medium transition-all duration-200 ${
              isLogin
                ? 'bg-accent text-white shadow-lg'
                : 'bg-gray-700 dark:bg-gray-800 text-text-primary hover:bg-gray-600 dark:hover:bg-gray-700'
            }`}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={`flex-1 py-3 px-4 rounded-lg text-center font-medium transition-all duration-200 ${
              !isLogin
                ? 'bg-accent text-white shadow-lg'
                : 'bg-gray-700 dark:bg-gray-800 text-text-primary hover:bg-gray-600 dark:hover:bg-gray-700'
            }`}
          >
            Register
          </Link>
        </div>

        {/* Form Content */}
        {children}
      </motion.div>
    </div>
  )
}

export default AuthLayout

