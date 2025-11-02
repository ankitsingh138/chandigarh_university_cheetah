import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// News Card Component
const NewsCard = ({ news }) => {
  const [isHighlighted, setIsHighlighted] = useState(false)

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '02/11/2025'
    try {
      const date = new Date(dateString)
      // Format as DD/MM/YYYY
      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = date.getFullYear()
      return `${day}/${month}/${year}`
    } catch (error) {
      return '02/11/2025'
    }
  }

  // Get trust score color based on value
  const getTrustScoreColor = (score) => {
    const numScore = typeof score === 'number' ? score : parseFloat(score)
    if (isNaN(numScore)) return 'text-gray-500'
    if (numScore >= 70) return 'text-green-500'
    if (numScore >= 50) return 'text-yellow-500'
    return 'text-red-500'
  }

  // Source icon
  const SourceIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-500">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  // Shield icon for trust score
  const ShieldIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-500">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  // External link icon
  const ExternalLinkIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="15 3 21 3 21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHighlighted(true)}
      onMouseLeave={() => setIsHighlighted(false)}
      className={`bg-bg-primary rounded-lg p-6 border transition-all duration-300 ${
        isHighlighted
          ? 'border-purple-500 shadow-lg shadow-purple-500/20'
          : 'border-gray-700 hover:border-purple-500/50'
      }`}
    >
      {/* Source and Date */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <SourceIcon />
          <span className="text-sm font-semibold text-purple-500">{news.source || 'Unknown Source'}</span>
        </div>
        <span className="text-xs text-text-secondary">{formatDate(news.date)}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-text-primary mb-4 overflow-hidden" style={{
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical'
      }}>
        {news.title || 'No title available'}
      </h3>

      {/* Trust Score */}
      <div className="flex items-center space-x-2 mb-4">
        <ShieldIcon />
        <span className={`text-sm font-semibold ${getTrustScoreColor(news.trustScore)}`}>
          Trust Score: {news.trustScore != null ? (typeof news.trustScore === 'number' ? news.trustScore.toFixed(1) : news.trustScore) : 'N/A'}%
        </span>
      </div>

      {/* Read More Button */}
      <a
        href={news.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center space-x-2 w-full px-4 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <span>Read More</span>
        <ExternalLinkIcon />
      </a>
    </motion.div>
  )
}

// Filter Dropdown Component
const FilterDropdown = ({ label, options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false)
    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative">
      <div className="mb-2 text-sm font-medium text-text-secondary">{label}</div>
      <button
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(!isOpen)
        }}
        className={`flex items-center justify-between w-full px-4 py-2.5 bg-bg-primary border rounded-lg text-text-primary transition-all duration-200 ${
          isOpen
            ? 'border-purple-500 shadow-lg shadow-purple-500/20'
            : 'border-gray-700 hover:border-purple-500'
        }`}
      >
        <span className="font-medium">{selected}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 mt-2 w-full bg-bg-primary border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden max-h-64 overflow-y-auto"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#8b5cf6 #1a1a1a'
          }}
        >
          {options.map((option) => (
            <button
              key={option}
              onClick={(e) => {
                e.stopPropagation()
                onSelect(option)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2.5 text-text-primary hover:bg-gray-800 transition-colors duration-200 ${
                selected === option ? 'bg-purple-600/20 text-purple-400' : ''
              }`}
            >
              {option}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}

const NewsDashboard = () => {
  const navigate = useNavigate()
  const [news, setNews] = useState([])
  const [sources, setSources] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  // Filter states
  const [selectedSource, setSelectedSource] = useState('All Sources')
  const [selectedTrustLevel, setSelectedTrustLevel] = useState('All Trust Levels')
  const [selectedSort, setSelectedSort] = useState('Latest First')

  // Trust level options
  const trustLevelOptions = [
    'All Trust Levels',
    'Low Trust (0-50%)',
    'Medium Trust (50-70%)',
    'High Trust (70-100%)'
  ]

  // Sort options
  const sortOptions = ['Latest First', 'Oldest First']

  // Fetch news sources
  const fetchSources = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/news/sources')
      const data = await response.json()
      if (data.status === 'success') {
        setSources(['All Sources', ...data.data])
      }
    } catch (err) {
      console.error('Error fetching sources:', err)
    }
  }

  // Fetch news based on filters
  const fetchNews = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const params = new URLSearchParams()
      
      // Map filter selections to API params
      if (selectedSource !== 'All Sources') {
        params.append('source', selectedSource)
      }
      
      const trustMapping = {
        'Low Trust (0-50%)': 'low',
        'Medium Trust (50-70%)': 'medium',
        'High Trust (70-100%)': 'high'
      }
      if (selectedTrustLevel !== 'All Trust Levels') {
        params.append('trustLevel', trustMapping[selectedTrustLevel] || '')
      }
      
      if (selectedSort === 'Oldest First') {
        params.append('sortBy', 'oldest')
      } else {
        params.append('sortBy', 'latest')
      }
      
      const response = await fetch(`http://localhost:8000/api/news?${params.toString()}`)
      const data = await response.json()
      
      if (data.status === 'success') {
        setNews(data.data || [])
      } else {
        setError(data.message || 'Failed to fetch news')
      }
    } catch (err) {
      console.error('Error fetching news:', err)
      setError('Failed to load news. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  // Fetch data on component mount and filter changes
  useEffect(() => {
    fetchSources()
    fetchNews() // Fetch news immediately on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchNews() // Fetch news when filters change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSource, selectedTrustLevel, selectedSort])

  // Header icon
  const NewsIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-500">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  // Back arrow icon
  const BackArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <NewsIcon />
            <h1 className="text-4xl font-bold text-purple-500">Disaster News Dashboard</h1>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center space-x-2 text-text-primary hover:text-purple-500 transition-colors duration-200"
          >
            <BackArrowIcon />
            <span>Back</span>
          </button>
        </div>
      </motion.div>

      {/* Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        <FilterDropdown
          label="News Source"
          options={sources}
          selected={selectedSource}
          onSelect={setSelectedSource}
        />
        <FilterDropdown
          label="Trust Level"
          options={trustLevelOptions}
          selected={selectedTrustLevel}
          onSelect={setSelectedTrustLevel}
        />
        <FilterDropdown
          label="Sort By"
          options={sortOptions}
          selected={selectedSort}
          onSelect={setSelectedSort}
        />
      </motion.div>

      {/* News Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-purple-500 text-xl font-semibold">Loading news...</div>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-red-500 text-xl font-semibold">{error}</div>
          </div>
        ) : news.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-text-secondary text-xl font-semibold">No news found</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <NewsCard key={index} news={item} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default NewsDashboard

