import { motion } from 'framer-motion'
import Button from './Button'

const Hero = () => {
  // Stagger animation for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Radial Glow Background */}
      <div className="radial-glow" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Pre-headline */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-text-secondary mb-4 font-light"
          >
            When Disaster Strikes, We're Ready.
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight"
          >
            <span className="block">Act Smart</span>
            <span className="block">Stay Protected</span>
          </motion.h1>

          {/* Sub-headline/Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-text-secondary mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            For a safer, smarter, and more coordinated response in times of crisis.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <Button to="/dashboard/news" variant="primary">
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
