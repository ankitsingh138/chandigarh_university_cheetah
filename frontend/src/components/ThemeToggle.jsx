import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full bg-gray-700 dark:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-offset-bg-primary"
      aria-label="Toggle theme"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-lg"
        animate={{
          x: theme === 'dark' ? 0 : 24,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      />
      {/* Icons */}
      <span className="absolute left-1.5 top-0.5 text-xs">🌙</span>
      <span className="absolute right-1.5 top-0.5 text-xs">☀️</span>
    </motion.button>
  )
}

export default ThemeToggle
