import { motion } from 'framer-motion'

const StepCard = ({ stepNumber, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-bg-primary rounded-lg p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        {/* Step Number Circle */}
        <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mb-4">
          <span className="text-white font-bold text-lg">{stepNumber}</span>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
        
        {/* Description */}
        <p className="text-sm text-text-secondary">{description}</p>
      </div>
    </motion.div>
  )
}

export default StepCard

