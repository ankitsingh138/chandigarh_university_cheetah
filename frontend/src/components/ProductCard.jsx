import { motion } from 'framer-motion'

// Amazon Icon ('a' logo) - Simple text-based
const AmazonIcon = () => (
  <span className="text-white font-bold text-sm">a</span>
)

// Shopping Cart Icon for Flipkart
const CartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="21" r="1" stroke="currentColor" strokeWidth="2"/>
    <circle cx="20" cy="21" r="1" stroke="currentColor" strokeWidth="2"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ProductCard = ({ name, description, amazonUrl, flipkartUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-bg-primary rounded-lg p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 flex flex-col"
    >
      {/* Product Name */}
      <h3 className="text-lg font-bold text-text-primary mb-3">{name}</h3>
      
      {/* Product Description */}
      <p className="text-sm text-text-secondary mb-4 flex-1">{description}</p>
      
      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto">
        {/* Amazon Button */}
        <a
          href={amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-bg-primary"
        >
          <AmazonIcon />
          <span>Amazon</span>
        </a>
        
        {/* Flipkart Button */}
        <a
          href={flipkartUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-bg-primary"
        >
          <CartIcon />
          <span>Flipkart</span>
        </a>
      </div>
    </motion.div>
  )
}

export default ProductCard

