/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Use class-based dark mode
  theme: {
    extend: {
      colors: {
        // Custom color variables for theme switching
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        accent: {
          DEFAULT: 'var(--accent-color)',
          glow: 'var(--accent-glow)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px var(--accent-glow), 0 0 40px var(--accent-glow), 0 0 60px var(--accent-glow)',
          },
          '50%': { 
            boxShadow: '0 0 30px var(--accent-glow), 0 0 60px var(--accent-glow), 0 0 90px var(--accent-glow)',
          },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
