import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoutes from './routes/contact.js'
import pingRoutes from './routes/ping.js'
import authRoutes from './routes/auth.js'
import safetyAssistantRoutes from './routes/safetyAssistant.js'
import errorHandler from './middleware/errorHandler.js'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/contact', contactRoutes)
app.use('/api/ping', pingRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/safety-assistant', safetyAssistantRoutes)

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'ResQ API Server',
    status: 'running',
    version: '1.0.0',
  })
})

// Error handling middleware (must be last)
app.use(errorHandler)

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
