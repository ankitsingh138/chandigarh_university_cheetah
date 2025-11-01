import { motion } from 'framer-motion'
import InfoCard from '../components/InfoCard'
import StepCard from '../components/StepCard'
import FAQAccordion from '../components/FAQAccordion'

// Icons for Types of Disaster Insurance
const HouseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CarIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 17h14v-5H5v5zM5 17v2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 17v-5M17 17v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const HeartbeatIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Icons for Special Disaster Coverage
const WaterIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const EarthquakeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 12l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const BusinessIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 21V10a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 7V1h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Insurance = () => {
  // FAQ Data
  const faqItems = [
    {
      question: 'What is covered under home insurance for natural disasters?',
      answer: 'Home insurance typically covers damage from fire, windstorms, hail, and lightning. However, coverage for floods and earthquakes usually requires separate policies. Review your policy documents carefully to understand what\'s included and consider additional coverage for comprehensive protection.',
    },
    {
      question: 'How do I file an auto insurance claim after a disaster?',
      answer: 'Document the damage, contact your insurance provider immediately, and follow their specific claim filing procedures. Take photos of all damage, gather any witness information, and keep receipts for temporary repairs or rental vehicles.',
    },
    {
      question: 'Are there any specific health insurance policies for disaster recovery?',
      answer: 'Many health insurance plans include disaster-related coverage. Check with your provider for specific disaster-related benefits. Some plans offer extended coverage for emergency services, mental health support, and medical evacuations during declared disasters.',
    },
  ]

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Disaster Insurance Guidance
        </h1>
        <p className="text-lg text-text-secondary">
          Your comprehensive guide to disaster-related insurance coverage
        </p>
      </motion.div>

      {/* Types of Disaster Insurance Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-text-primary">
          Types of Disaster Insurance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            icon={HouseIcon}
            title="Home Insurance"
            description="Protection for your property and belongings against natural disasters"
          />
          <InfoCard
            icon={CarIcon}
            title="Auto Insurance"
            description="Coverage for vehicle damage during natural disasters"
          />
          <InfoCard
            icon={HeartbeatIcon}
            title="Health Insurance"
            description="Medical coverage for disaster-related injuries and emergencies"
          />
        </div>
      </motion.section>

      {/* How to File a Claim Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-text-primary">
          How to File a Claim
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StepCard
            stepNumber={1}
            title="Document the Damage"
            description="Take photos and videos of all damage"
          />
          <StepCard
            stepNumber={2}
            title="Contact Your Insurer"
            description="Report the damage as soon as possible"
          />
          <StepCard
            stepNumber={3}
            title="File the Claim"
            description="Submit all required documentation"
          />
          <StepCard
            stepNumber={4}
            title="Follow Up"
            description="Stay in contact with your adjuster"
          />
        </div>
      </motion.section>

      {/* Frequently Asked Questions Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-text-primary">
          Frequently Asked Questions
        </h2>
        <FAQAccordion items={faqItems} />
      </motion.section>

      {/* Special Disaster Coverage Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-text-primary">
          Special Disaster Coverage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            icon={WaterIcon}
            title="Flood Insurance"
            description="Separate policy required for flood damage coverage"
          />
          <InfoCard
            icon={EarthquakeIcon}
            title="Earthquake Insurance"
            description="Additional coverage for earthquake-related damage"
          />
          <InfoCard
            icon={BusinessIcon}
            title="Business Interruption"
            description="Coverage for lost income during disaster recovery"
          />
        </div>
      </motion.section>
    </div>
  )
}

export default Insurance

