import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Quiz Icon
const QuizIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const Quiz = () => {
  const [selectedDisaster, setSelectedDisaster] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  // Disaster definitions with their questions
  const disasterQuestions = {
    earthquake: {
      name: '🌋 Earthquake',
      icon: '🌋',
      questions: [
        {
          id: 1,
          question: 'You\'re inside a building when an earthquake starts. What should you do first?',
          correctAnswer: 'b',
          options: [
            { value: 'a', label: 'a) Run outside quickly', points: 0 },
            { value: 'b', label: 'b) Take cover under a sturdy table or desk and hold on', points: 2 },
            { value: 'c', label: 'c) Stand near windows to watch what\'s happening', points: 0 }
          ]
        },
        {
          id: 2,
          question: 'If you are outdoors during an earthquake, what is the safest action?',
          correctAnswer: 'b',
          options: [
            { value: 'a', label: 'a) Stand under trees or power lines', points: 0 },
            { value: 'b', label: 'b) Move to an open area away from buildings and wires', points: 2 },
            { value: 'c', label: 'c) Run inside a nearby building', points: 0 }
          ]
        },
        {
          id: 3,
          question: 'After the shaking stops, what should you do before re-entering your home?',
          correctAnswer: 'a',
          options: [
            { value: 'a', label: 'a) Check for gas leaks, fire, and structural damage', points: 2 },
            { value: 'b', label: 'b) Go inside immediately', points: 0 },
            { value: 'c', label: 'c) Use the elevator to reach upper floors', points: 0 }
          ]
        }
      ]
    },
    flood: {
      name: '🌊 Flood',
      icon: '🌊',
      questions: [
        {
          id: 1,
          question: 'Water starts entering your home due to heavy rain. What\'s the first thing you should do?',
          correctAnswer: 'a',
          options: [
            { value: 'a', label: 'a) Move to a higher floor and turn off electricity', points: 2 },
            { value: 'b', label: 'b) Try to block the water with furniture', points: 0 },
            { value: 'c', label: 'c) Go outside to see how deep it is', points: 0 }
          ]
        },
        {
          id: 2,
          question: 'If floodwaters rise rapidly while you are driving, what should you do?',
          correctAnswer: 'b',
          options: [
            { value: 'a', label: 'a) Try to drive through the water', points: 0 },
            { value: 'b', label: 'b) Stop, leave the car, and move to higher ground', points: 2 },
            { value: 'c', label: 'c) Speed up to cross quickly', points: 0 }
          ]
        },
        {
          id: 3,
          question: 'What items are most important to keep in an emergency flood kit?',
          correctAnswer: 'b',
          options: [
            { value: 'a', label: 'a) Clothes and shoes only', points: 0 },
            { value: 'b', label: 'b) Water, flashlight, important documents, and food', points: 2 },
            { value: 'c', label: 'c) Toys and gadgets', points: 0 }
          ]
        }
      ]
    },
    fire: {
      name: '🔥 Fire',
      icon: '🔥',
      questions: [
        {
          id: 1,
          question: 'You notice smoke and flames in your kitchen. What\'s your first action?',
          correctAnswer: 'a',
          options: [
            { value: 'a', label: 'a) Try to put out the fire if it\'s small, else evacuate', points: 2 },
            { value: 'b', label: 'b) Throw water on all types of fire', points: 0 },
            { value: 'c', label: 'c) Hide inside and wait for help', points: 0 }
          ]
        },
        {
          id: 2,
          question: 'While escaping from a burning building, what\'s the safest way to move?',
          correctAnswer: 'b',
          options: [
            { value: 'a', label: 'a) Run upright', points: 0 },
            { value: 'b', label: 'b) Stay low to avoid smoke', points: 2 },
            { value: 'c', label: 'c) Use the elevator', points: 0 }
          ]
        },
        {
          id: 3,
          question: 'If your clothes catch fire, what should you do?',
          correctAnswer: 'b',
          options: [
            { value: 'a', label: 'a) Run around to cool off', points: 0 },
            { value: 'b', label: 'b) Stop, Drop, and Roll', points: 2 },
            { value: 'c', label: 'c) Shout for help only', points: 0 }
          ]
        }
      ]
    },
    cyclone: {
      name: '🌪️ Cyclone / Storm',
      icon: '🌪️',
      questions: [
        {
          id: 1,
          question: 'You get a cyclone warning for your area. What should you do?',
          correctAnswer: 'b',
          options: [
            { value: 'a', label: 'a) Ignore it unless you see strong winds', points: 0 },
            { value: 'b', label: 'b) Secure windows, store food/water, and stay indoors', points: 2 },
            { value: 'c', label: 'c) Go outside to check the weather', points: 0 }
          ]
        },
        {
          id: 2,
          question: 'During a cyclone, if you are inside, what is the safest part of the house?',
          correctAnswer: 'b',
          options: [
            { value: 'a', label: 'a) Near windows', points: 0 },
            { value: 'b', label: 'b) In an interior room or hallway without windows', points: 2 },
            { value: 'c', label: 'c) On the roof', points: 0 }
          ]
        }
      ]
    },
    heatwave: {
      name: '🏜️ Heatwave / Drought',
      icon: '🏜️',
      questions: [
        {
          id: 1,
          question: 'During a heatwave, what\'s the best way to stay safe?',
          correctAnswer: 'a',
          options: [
            { value: 'a', label: 'a) Drink lots of water and stay indoors during peak hours', points: 2 },
            { value: 'b', label: 'b) Exercise outdoors at noon', points: 0 },
            { value: 'c', label: 'c) Wear thick clothes to avoid sunburn', points: 0 }
          ]
        },
        {
          id: 2,
          question: 'In a drought-prone area, how can you help conserve water?',
          correctAnswer: 'b',
          options: [
            { value: 'a', label: 'a) Use water freely; it won\'t matter', points: 0 },
            { value: 'b', label: 'b) Collect and reuse grey water for plants', points: 2 },
            { value: 'c', label: 'c) Wash cars daily', points: 0 }
          ]
        }
      ]
    },
    landslide: {
      name: '⛰️ Landslide',
      icon: '⛰️',
      questions: [
        {
          id: 1,
          question: 'You live on a hillside and it\'s raining heavily. What precaution should you take?',
          correctAnswer: 'a',
          options: [
            { value: 'a', label: 'a) Stay alert and move to a safer area if cracks appear', points: 2 },
            { value: 'b', label: 'b) Sleep peacefully; landslides are rare', points: 0 },
            { value: 'c', label: 'c) Wait until debris blocks the road', points: 0 }
          ]
        },
        {
          id: 2,
          question: 'If a landslide occurs nearby, what should you do immediately?',
          correctAnswer: 'b',
          options: [
            { value: 'a', label: 'a) Run toward the slope to check', points: 0 },
            { value: 'b', label: 'b) Move away from the slide path and alert authorities', points: 2 },
            { value: 'c', label: 'c) Try to collect your belongings first', points: 0 }
          ]
        }
      ]
    }
  }

  // Get current disaster's questions
  const questions = selectedDisaster ? disasterQuestions[selectedDisaster]?.questions || [] : []

  const handleDisasterSelect = (disaster) => {
    setSelectedDisaster(disaster)
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  const handleAnswer = (value) => {
    const question = questions[currentQuestion]
    const selectedOption = question.options.find(opt => opt.value === value)
    const points = selectedOption ? selectedOption.points : 0
    setAnswers({ ...answers, [currentQuestion]: { value, points } })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateScore()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    setShowResults(true)
  }

  const getScoreLevel = (score) => {
    if (score >= 70) return { level: '🟢 Well Prepared', color: 'text-green-500', bg: 'bg-green-600', description: 'Excellent! You are well-prepared for this disaster.' }
    if (score >= 40) return { level: '🟡 Needs Some Improvement', color: 'text-orange-500', bg: 'bg-orange-600', description: 'Good start! You have basic knowledge but should improve your preparedness for this disaster.' }
    return { level: '🔴 At Risk', color: 'text-red-500', bg: 'bg-red-600', description: 'Your preparedness needs significant improvement. Review safety guidelines for this disaster and take action.' }
  }

  const currentScore = Object.values(answers).reduce((sum, answer) => sum + (answer?.points || 0), 0)
  const maxScore = questions.length * 2
  const progress = selectedDisaster ? ((currentQuestion + 1) / questions.length) * 100 : 0
  const canProceed = answers[currentQuestion] !== undefined

  // Show disaster selection screen if none selected
  if (!selectedDisaster) {
    return (
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-purple-500 mb-4">
            Disaster Readiness Quiz
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            Select a disaster to assess your preparedness level
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(disasterQuestions).map(([key, disaster]) => (
            <motion.button
              key={key}
              onClick={() => handleDisasterSelect(key)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-bg-primary rounded-lg p-6 border-2 border-gray-700 hover:border-purple-500 transition-all duration-300 text-left group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl">{disaster.icon}</span>
                <h3 className="text-xl font-bold text-text-primary">{disaster.name}</h3>
              </div>
              <p className="text-text-secondary text-sm">
                Test your readiness for {disaster.name.toLowerCase()} preparedness
              </p>
              <div className="mt-4 text-purple-500 font-medium group-hover:text-purple-400 transition-colors">
                Start Quiz →
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    )
  }

  if (showResults) {
    const finalScore = Math.round((currentScore / maxScore) * 100)
    const scoreInfo = getScoreLevel(finalScore)
    const disasterName = disasterQuestions[selectedDisaster]?.name || 'Disaster'

    return (
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-purple-500 mb-2">
            {disasterName} Readiness Score
          </h1>
          <p className="text-text-secondary text-lg mb-4">
            Your preparedness assessment results
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-bg-primary rounded-lg p-8 border border-purple-500/30 max-w-2xl mx-auto"
        >
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center">
              <QuizIcon />
            </div>
            
            <div>
              <div className={`text-6xl font-bold mb-2 ${scoreInfo.color}`}>
                {finalScore}%
              </div>
              <div className={`inline-block px-4 py-2 rounded-full text-white font-semibold ${scoreInfo.bg}`}>
                {scoreInfo.level}
              </div>
            </div>

            <p className="text-text-secondary text-lg">{scoreInfo.description}</p>

            <div className="pt-4 border-t border-gray-700">
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-text-secondary text-sm mb-1">Total Questions</p>
                  <p className="text-text-primary text-xl font-semibold">{questions.length}</p>
                </div>
                <div>
                  <p className="text-text-secondary text-sm mb-1">Points Scored</p>
                  <p className="text-text-primary text-xl font-semibold">{currentScore} / {maxScore}</p>
                </div>
                <div className="col-span-2 mt-4">
                  <p className="text-text-secondary text-sm mb-2">Correct Answers</p>
                  <p className="text-text-primary text-lg font-semibold">{Math.round(currentScore / 2)} / {questions.length} questions</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                setShowResults(false)
                setCurrentQuestion(0)
                setAnswers({})
              }}
              className="px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-bg-secondary"
            >
              Retake Quiz
            </button>
            <button
              onClick={() => {
                setSelectedDisaster(null)
                setShowResults(false)
                setCurrentQuestion(0)
                setAnswers({})
              }}
              className="px-8 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-bg-secondary"
            >
              Choose Different Disaster
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-purple-500 mb-2">
              {disasterQuestions[selectedDisaster]?.name} Quiz
            </h1>
            <p className="text-lg text-text-secondary">
              Test your readiness for {disasterQuestions[selectedDisaster]?.name.toLowerCase()} preparedness
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedDisaster(null)
              setCurrentQuestion(0)
              setAnswers({})
              setShowResults(false)
            }}
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-sm transition-all duration-300"
          >
            Change Disaster
          </button>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
          className="h-full bg-purple-600 rounded-full"
        />
      </div>
      <div className="text-sm text-text-secondary text-right">
        Question {currentQuestion + 1} of {questions.length}
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-bg-primary rounded-lg p-8 border border-purple-500/30"
        >
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            {currentQ.question}
          </h2>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all duration-200 ${
                  answers[currentQuestion]?.value === option.value
                    ? 'border-purple-500 bg-purple-600/20 text-text-primary'
                    : 'border-gray-700 bg-bg-primary hover:border-purple-500/50 text-text-secondary hover:text-text-primary'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    answers[currentQuestion]?.value === option.value
                      ? 'border-purple-500 bg-purple-500'
                      : 'border-gray-600'
                  }`}>
                    {answers[currentQuestion]?.value === option.value && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="font-medium">{option.label}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            currentQuestion === 0
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-gray-700 hover:bg-gray-600 text-white'
          }`}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={!canProceed}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            !canProceed
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}
        >
          {currentQuestion === questions.length - 1 ? 'View Results' : 'Next'}
        </button>
      </div>
    </div>
  )
}

export default Quiz

