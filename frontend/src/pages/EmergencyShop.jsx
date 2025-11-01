import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'

const EmergencyShop = () => {
  // Helper function to generate Amazon search URL
  const getAmazonUrl = (productName) => {
    return `https://www.amazon.in/s?k=${encodeURIComponent(productName)}`
  }

  // Helper function to generate Flipkart search URL
  const getFlipkartUrl = (productName) => {
    return `https://www.flipkart.com/search?q=${encodeURIComponent(productName)}`
  }

  // Product data
  const products = [
    {
      name: 'Fire Blankets',
      description: 'Fire-resistant emergency blankets for fire safety.',
      amazonUrl: getAmazonUrl('fire blanket emergency'),
      flipkartUrl: getFlipkartUrl('fire blanket emergency'),
    },
    {
      name: 'Camping Tarps',
      description: 'Durable camping tarps for emergency shelter and protection.',
      amazonUrl: getAmazonUrl('camping tarp emergency'),
      flipkartUrl: getFlipkartUrl('camping tarp emergency'),
    },
    {
      name: 'Sleeping Bags',
      description: 'Compact, insulated, and durable sleeping bags for emergency situations.',
      amazonUrl: getAmazonUrl('sleeping bag emergency compact'),
      flipkartUrl: getFlipkartUrl('sleeping bag emergency compact'),
    },
    {
      name: 'Foam Sleeping Pads',
      description: 'Lightweight foam sleeping pads for comfortable emergency sleeping.',
      amazonUrl: getAmazonUrl('foam sleeping pad'),
      flipkartUrl: getFlipkartUrl('foam sleeping pad'),
    },
    {
      name: 'Inflatable Mattress',
      description: 'Portable inflatable mattress for emergency sleeping arrangements.',
      amazonUrl: getAmazonUrl('inflatable mattress portable'),
      flipkartUrl: getFlipkartUrl('inflatable mattress portable'),
    },
    {
      name: 'Emergency Sleeping Bags',
      description: 'Compact and warm emergency sleeping bags for survival situations.',
      amazonUrl: getAmazonUrl('emergency sleeping bag survival'),
      flipkartUrl: getFlipkartUrl('emergency sleeping bag survival'),
    },
    {
      name: 'Portable Solar Power Bank',
      description: 'High-capacity solar-powered power bank for charging devices during emergencies.',
      amazonUrl: getAmazonUrl('solar power bank portable'),
      flipkartUrl: getFlipkartUrl('solar power bank portable'),
    },
    {
      name: 'Emergency Blankets',
      description: 'Mylar thermal emergency blankets for maintaining body heat in cold conditions.',
      amazonUrl: getAmazonUrl('mylar emergency blanket thermal'),
      flipkartUrl: getFlipkartUrl('mylar emergency blanket thermal'),
    },
    {
      name: 'LED Flashlights',
      description: 'Bright LED flashlights with extra batteries or rechargeable options.',
      amazonUrl: getAmazonUrl('LED flashlight rechargeable'),
      flipkartUrl: getFlipkartUrl('LED flashlight rechargeable'),
    },
    {
      name: 'Solar-Powered Lanterns',
      description: 'Portable solar-powered lanterns for emergency lighting.',
      amazonUrl: getAmazonUrl('solar lantern portable'),
      flipkartUrl: getFlipkartUrl('solar lantern portable'),
    },
    {
      name: 'First Aid Kit',
      description: 'Comprehensive first aid kit with essential medical supplies for emergencies.',
      amazonUrl: getAmazonUrl('first aid kit comprehensive'),
      flipkartUrl: getFlipkartUrl('first aid kit comprehensive'),
    },
    {
      name: 'Water Purification Tablets',
      description: 'Portable water purification tablets for safe drinking water during disasters.',
      amazonUrl: getAmazonUrl('water purification tablets'),
      flipkartUrl: getFlipkartUrl('water purification tablets'),
    },
    {
      name: 'Emergency Food Rations',
      description: 'Long-lasting emergency food rations and survival food packs.',
      amazonUrl: getAmazonUrl('emergency food rations survival'),
      flipkartUrl: getFlipkartUrl('emergency food rations survival'),
    },
    {
      name: 'Multi-Tool Survival Kit',
      description: 'Compact multi-tool survival kit with knife, pliers, and emergency tools.',
      amazonUrl: getAmazonUrl('multi tool survival kit'),
      flipkartUrl: getFlipkartUrl('multi tool survival kit'),
    },
    {
      name: 'Emergency Whistle',
      description: 'Loud emergency whistle for signaling help during disasters.',
      amazonUrl: getAmazonUrl('emergency whistle loud'),
      flipkartUrl: getFlipkartUrl('emergency whistle loud'),
    },
    {
      name: 'Portable Water Filter',
      description: 'Portable water filter bottle for clean drinking water anywhere.',
      amazonUrl: getAmazonUrl('portable water filter bottle'),
      flipkartUrl: getFlipkartUrl('portable water filter bottle'),
    },
    {
      name: 'Emergency Radio',
      description: 'Hand-crank emergency radio with flashlight and phone charger.',
      amazonUrl: getAmazonUrl('hand crank emergency radio'),
      flipkartUrl: getFlipkartUrl('hand crank emergency radio'),
    },
    {
      name: 'Gas Stove Portable',
      description: 'Compact portable gas stove for cooking during power outages.',
      amazonUrl: getAmazonUrl('portable gas stove compact'),
      flipkartUrl: getFlipkartUrl('portable gas stove compact'),
    },
    {
      name: 'Emergency Tent',
      description: 'Lightweight emergency tent for temporary shelter during disasters.',
      amazonUrl: getAmazonUrl('emergency tent lightweight'),
      flipkartUrl: getFlipkartUrl('emergency tent lightweight'),
    },
    {
      name: 'Survival Rope',
      description: 'Strong paracord survival rope for emergency situations and outdoor use.',
      amazonUrl: getAmazonUrl('paracord survival rope'),
      flipkartUrl: getFlipkartUrl('paracord survival rope'),
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Emergency Disaster Products
        </h1>
        <p className="text-lg text-text-secondary">
          Essential supplies for emergency preparedness
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <ProductCard
              name={product.name}
              description={product.description}
              amazonUrl={product.amazonUrl}
              flipkartUrl={product.flipkartUrl}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default EmergencyShop

