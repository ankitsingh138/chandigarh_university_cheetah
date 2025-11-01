import { motion } from 'framer-motion'

const DisasterCard = ({ icon: Icon, title, severity, description, remedies }) => {
  // Severity badge styling
  const getSeverityStyles = (severity) => {
    switch (severity.toUpperCase()) {
      case 'HIGH':
        return 'bg-red-600 text-white'
      case 'MEDIUM':
        return 'bg-orange-500 text-white'
      case 'LOW':
        return 'bg-green-600 text-white'
      default:
        return 'bg-gray-600 text-white'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-bg-primary rounded-lg p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
    >
      {/* Icon and Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="text-purple-500 flex-shrink-0">
          <Icon />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSeverityStyles(severity)}`}>
          {severity}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>

      {/* Description */}
      <p className="text-sm text-text-secondary mb-4">{description}</p>

      {/* Remedies Section */}
      <div>
        <h4 className="text-sm font-semibold text-text-primary mb-2">Remedies:</h4>
        <ul className="space-y-2">
          {remedies.map((remedy, index) => (
            <li key={index} className="text-sm text-text-secondary flex items-start">
              <span className="text-purple-500 mr-2 mt-1">•</span>
              <span>{remedy}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default DisasterCard

