import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AuthLayout from '../components/AuthLayout'
import InputField from '../components/InputField'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsLoading(true)

    try {
      // TODO: Replace with actual API call
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // TODO: Handle successful login (store token, redirect, etc.)
        console.log('Login successful')
        navigate('/')
      } else {
        const data = await response.json()
        setErrors({ general: data.message || 'Login failed' })
      }
    } catch (error) {
      console.error('Login error:', error)
      setErrors({ general: 'An error occurred. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthLayout activeTab="login">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        {/* Password Field */}
        <InputField
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        {/* General Error */}
        {errors.general && (
          <div className="text-red-500 text-sm text-center">{errors.general}</div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-6 rounded-lg bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed auth-primary-button"
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
          >
            <span>→</span>
            <span>{isLoading ? 'Logging in...' : 'Login'}</span>
          </motion.button>

          <Link to="/">
            <motion.button
              type="button"
              className="w-full py-3 px-6 rounded-lg bg-gray-700 dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-700 text-white font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-bg-primary flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>←</span>
              <span>Back to Home</span>
            </motion.button>
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Login

