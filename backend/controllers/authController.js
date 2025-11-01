// Placeholder auth controllers - ready for MongoDB/JWT integration later

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        status: 'error',
        message: 'Email and password are required',
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid email format',
      })
    }

    // TODO: Check user credentials in database
    // TODO: Generate JWT token
    // TODO: Return user data and token

    // Placeholder response
    res.status(200).json({
      status: 'success',
      message: 'Login successful (placeholder)',
      data: {
        user: {
          email,
          // In real app: name, id, etc.
        },
        token: 'placeholder_token',
      },
    })
  } catch (error) {
    next(error)
  }
}

export const registerController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        status: 'error',
        message: 'Name, email, and password are required',
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid email format',
      })
    }

    // Password validation
    if (password.length < 6) {
      return res.status(400).json({
        status: 'error',
        message: 'Password must be at least 6 characters',
      })
    }

    // TODO: Check if user already exists
    // TODO: Hash password (bcrypt)
    // TODO: Save user to database
    // TODO: Generate JWT token
    // TODO: Send verification email

    // Placeholder response
    res.status(201).json({
      status: 'success',
      message: 'Registration successful (placeholder)',
      data: {
        user: {
          name,
          email,
          // In real app: id, createdAt, etc.
        },
        token: 'placeholder_token',
      },
    })
  } catch (error) {
    next(error)
  }
}

