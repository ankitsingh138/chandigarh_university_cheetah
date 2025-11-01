import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      return savedTheme || 'dark'
    }
    return 'dark'
  })

  // Apply theme class to html element and localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement
      root.setAttribute('data-theme', theme)
      // Also add/remove 'dark' class for Tailwind dark: variants
      if (theme === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
