# ResQ - Act Smart, Stay Protected

A modern, responsive web application for disaster response coordination, built with React + Vite and Node.js + Express.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- Git

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   Or use `npm start` for production mode.

5. The API server will run at `http://localhost:5000`

## 📁 Project Structure

```
/chandigarh_university_cheetah
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── layouts/         # Layout components
│   │   ├── context/         # React context providers
│   │   ├── hooks/           # Custom React hooks
│   │   ├── routes/          # React Router configuration
│   │   └── assets/          # Images, fonts, etc.
│   └── package.json
├── backend/
│   ├── routes/              # API route handlers
│   ├── controllers/         # Route controllers
│   ├── middleware/          # Express middleware
│   └── server.js            # Express server entry point
└── README.md
```

## 🎨 Features

- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Responsive Design**: Mobile-first approach, works on all devices
- **Animations**: Smooth transitions and effects powered by Framer Motion
- **Modern Stack**: React 18, Vite, TailwindCSS, React Router v6

## 🔧 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start with nodemon (auto-restart)
- `npm start` - Start production server

## 🌐 API Endpoints

- `GET /api/ping` - Server status check
- `POST /api/contact` - Submit contact form (placeholder)

## 📝 Notes

- The theme toggle persists to localStorage
- All colors use CSS variables for easy theme switching
- Backend endpoints are ready for MongoDB integration
- Font: Inter (loaded from Google Fonts)

## 🛠️ Tech Stack

**Frontend:**
- React 18.3+
- Vite 5.4+
- React Router v6
- TailwindCSS 3.4+
- Framer Motion 11.5+

**Backend:**
- Node.js 18+
- Express 4.19+
- ES Modules

## 📄 License

ISC