import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

// Logo SVG Component (star/sparkle icon)
const LogoIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-accent"
  >
    <path
      d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z"
      fill="currentColor"
    />
  </svg>
)

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-gray-800 dark:border-gray-700 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="text-accent"
            >
              <LogoIcon />
            </motion.div>
            <span className="text-xl md:text-2xl font-semibold text-text-primary">
              ResQ
            </span>
          </Link>

          {/* Right side: Theme Toggle, Login, Register */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <ThemeToggle />
            <Link
              to="/login"
              className="text-sm md:text-base text-text-primary hover:text-accent transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-sm md:text-base text-text-primary hover:text-accent transition-colors duration-200"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
