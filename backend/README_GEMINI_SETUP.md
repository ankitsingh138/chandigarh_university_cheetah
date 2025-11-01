# Gemini API Setup Instructions

## Getting Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

## Setting Up in Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a `.env` file if you haven't already:
   ```bash
   cp .env.example .env
   ```

3. Open the `.env` file and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```

## Testing

Once the backend is running with your API key, the Safety Assistant will be able to answer disaster-related questions using Google's Gemini AI.

## Notes

- Keep your API key secure and never commit it to version control
- The `.env` file is already in `.gitignore`
- Free tier has rate limits, but should be sufficient for development
- The AI is configured to focus on disaster preparedness and safety topics

