import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import ChatMessage from '../components/ChatMessage'

// Robot Icon
const RobotIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 7v4M6 13h2M16 13h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="9" y="15" width="6" height="2" rx="1" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

// Send Icon
const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SafetyAssistant = () => {
  const [messages, setMessages] = useState([
    {
      text: 'Hello! I\'m your Safety Assistant. I can help you with disaster preparedness, emergency response, safety tips, and answer questions about natural and human-made disasters. How can I assist you today?',
      isUser: false,
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (e) => {
    e.preventDefault()
    
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }])
    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/safety-assistant/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      
      if (data.status === 'error') {
        setMessages((prev) => [
          ...prev,
          { 
            text: `Error: ${data.message || 'Failed to get response. Please try again.'}`,
            isUser: false 
          },
        ])
      } else {
        setMessages((prev) => [
          ...prev,
          { 
            text: data.response || 'I apologize, but I couldn\'t process your request. Please try again.', 
            isUser: false 
          },
        ])
      }
    } catch (error) {
      console.error('Chat error:', error)
      setMessages((prev) => [
        ...prev,
        {
          text: 'I apologize, but I\'m having trouble connecting right now. Please make sure the backend server is running on port 5000 and try again.',
          isUser: false,
        },
      ])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const quickQuestions = [
    'What should I do during an earthquake?',
    'How to prepare for a flood?',
    'Emergency kit essentials',
    'Wildfire safety tips',
  ]

  const handleQuickQuestion = (question) => {
    setInput(question)
    inputRef.current?.focus()
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] max-h-[800px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <div className="flex items-center space-x-3 mb-2">
          <div className="text-purple-500">
            <RobotIcon />
          </div>
          <h1 className="text-4xl font-bold text-purple-500">
            Safety Assistant
          </h1>
        </div>
        <p className="text-lg text-text-secondary">
          Your AI-powered assistant for disaster preparedness and emergency response
        </p>
      </motion.div>

      {/* Quick Questions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-4"
      >
        <p className="text-sm text-text-secondary mb-2">Quick Questions:</p>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(question)}
              className="px-3 py-1.5 text-sm bg-bg-primary border border-gray-700 rounded-lg text-text-primary hover:border-purple-500 hover:text-purple-400 transition-all duration-200"
            >
              {question}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto mb-4 pr-2 custom-scrollbar">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message.text} isUser={message.isUser} />
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-bg-primary border border-gray-700 rounded-lg px-4 py-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onSubmit={handleSend}
        className="flex gap-3"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about disaster safety..."
          className="flex-1 px-4 py-3 bg-bg-primary border border-gray-700 rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-purple-500 transition-all duration-200"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-bg-secondary flex items-center justify-center"
        >
          <SendIcon />
        </button>
      </motion.form>
    </div>
  )
}

export default SafetyAssistant

