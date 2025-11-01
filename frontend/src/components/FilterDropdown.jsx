import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FilterDropdown = ({ label, icon: Icon, options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 bg-bg-primary border border-gray-700 rounded-lg text-text-primary hover:border-purple-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-bg-secondary"
      >
        {Icon && <Icon />}
        <span className="font-medium">{selected || label}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDownIcon />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-full bg-bg-primary border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden"
          >
            {options.map((option) => {
              const isSelected = option === selected || 
                (option === 'All Disasters' && selected === null) ||
                (option === 'All Severities' && selected === null)
              
              return (
                <button
                  key={option}
                  onClick={() => {
                    if (option === 'All Disasters' || option === 'All Severities') {
                      onSelect(null)
                    } else {
                      onSelect(option === selected ? null : option)
                    }
                    setIsOpen(false)
                  }}
                  className={`w-full text-left px-4 py-2.5 text-text-primary hover:bg-gray-800 transition-colors duration-200 ${
                    isSelected ? 'bg-purple-600/20 text-purple-400' : ''
                  }`}
                >
                  {option}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FilterDropdown

