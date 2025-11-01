import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ChevronDownIcon = ({ isOpen }) => (
  <motion.svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
  >
    <polyline
      points="6 9 12 15 18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
)

const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div
            key={index}
            className="bg-bg-primary rounded-lg border border-gray-700 overflow-hidden"
          >
            {/* Question Header */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800 transition-colors duration-200"
            >
              <span className="text-lg font-medium text-text-primary pr-4">
                {item.question}
              </span>
              <ChevronDownIcon isOpen={isOpen} className="text-text-primary flex-shrink-0" />
            </button>

            {/* Answer Content */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 text-text-secondary border-t border-gray-700">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export default FAQAccordion

