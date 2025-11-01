import { GoogleGenerativeAI } from '@google/generative-ai'

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

export const chatController = async (req, res, next) => {
  try {
    const { message } = req.body

    if (!message || !message.trim()) {
      return res.status(400).json({
        status: 'error',
        message: 'Message is required',
      })
    }

    // Check if API key is configured
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        status: 'error',
        message: 'Gemini API key is not configured. Please add GEMINI_API_KEY to your .env file.',
      })
    }

    // System prompt to focus on disaster-related topics
    const systemPrompt = `You are a helpful Safety Assistant specializing in disaster preparedness, emergency response, and safety guidance. Your role is to:

1. Provide accurate, actionable advice on natural disasters (earthquakes, floods, hurricanes, wildfires, etc.)
2. Offer guidance on human-made disasters (chemical spills, fires, cyber attacks, etc.)
3. Share emergency preparedness tips and best practices
4. Help users understand disaster risks and how to mitigate them
5. Provide step-by-step instructions for emergency situations
6. Recommend safety equipment and emergency supplies

Keep your responses:
- Clear and concise
- Focused on practical, actionable advice
- Empathetic and reassuring
- Factual and accurate
- Appropriate for emergency situations

If asked about topics unrelated to disasters or safety, politely redirect the conversation to disaster preparedness and safety topics.`

    // Try different model names in order of preference
    const modelNames = ['gemini-1.5-flash', 'gemini-pro', 'gemini-1.5-pro']
    let lastError = null
    
    for (const modelName of modelNames) {
      try {
        // Get the generative model
        const model = genAI.getGenerativeModel({ 
          model: modelName,
          systemInstruction: systemPrompt
        })

        // Generate content with the user message
        const result = await model.generateContent(message)
        const response = await result.response
        const text = response.text()

        return res.json({
          status: 'success',
          response: text,
        })
      } catch (modelError) {
        console.log(`Model ${modelName} failed, trying next...`)
        lastError = modelError
        
        // If it's not a model-specific error, break and handle it
        if (!modelError.message?.includes('model') && !modelError.message?.includes('404')) {
          throw modelError
        }
      }
    }
    
    // If all models failed, throw the last error
    throw lastError || new Error('All model attempts failed')
  } catch (error) {
    console.error('Gemini API error:', error)
    
    // Handle specific Gemini API errors
    if (error.message?.includes('API_KEY') || error.message?.includes('401') || error.message?.includes('403')) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid or unauthorized Gemini API key. Please check your GEMINI_API_KEY in .env file.',
      })
    }

    // Handle quota/rate limit errors
    if (error.message?.includes('429') || error.message?.includes('quota') || error.message?.includes('rate limit')) {
      return res.status(429).json({
        status: 'error',
        message: 'API rate limit exceeded. Please try again in a few moments.',
      })
    }


    res.status(500).json({
      status: 'error',
      message: 'Failed to generate response. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
}

