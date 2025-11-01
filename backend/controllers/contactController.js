// Placeholder contact controller - ready for MongoDB integration later
export const contactController = async (req, res, next) => {
  try {
    const { name, email, message, subject } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        status: 'error',
        message: 'Name, email, and message are required',
      })
    }

    // Email validation (simple)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid email format',
      })
    }

    // TODO: Integrate with email service (SendGrid, Nodemailer, etc.)
    // TODO: Save to MongoDB if needed

    // Placeholder response
    res.status(200).json({
      status: 'success',
      message: 'Contact form submitted successfully',
      data: {
        name,
        email,
        subject: subject || 'No subject',
        message,
        submittedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    next(error)
  }
}
