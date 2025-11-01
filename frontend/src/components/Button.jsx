import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary'
  
  const variantClasses = {
    primary: 'bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500',
  }

  const buttonContent = (
    <motion.span
      className={`${baseClasses} ${variantClasses[variant]} ${className} glow-button`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  )

  if (to) {
    return (
      <Link to={to} {...props}>
        {buttonContent}
      </Link>
    )
  }

  return (
    <button onClick={onClick} {...props}>
      {buttonContent}
    </button>
  )
}

export default Button
