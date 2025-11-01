// CORS configuration (if needed for custom setup)
// Currently using the cors package in server.js, but this can be extended

export const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
}
