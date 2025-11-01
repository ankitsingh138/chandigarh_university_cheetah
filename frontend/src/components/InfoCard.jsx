import { motion } from 'framer-motion'

const InfoCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-bg-primary rounded-lg p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
    >
      <div className="flex items-start space-x-4">
        <div className="text-purple-500 flex-shrink-0">
          <Icon />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
          <p className="text-sm text-text-secondary">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default InfoCard

