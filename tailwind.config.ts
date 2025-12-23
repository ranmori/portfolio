import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',              // lets you toggle dark/light with a button
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        pixel: ['"VT323"', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
  themes: [
    {
      light: {  // winter clone
        ...require('daisyui/src/theming/themes')['[data-theme=winter]'],
      },
      dark: {   // v4-dark clone
        ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          // Force all surfaces to pure black
        'base-100': '#000000',        // main background
        'base-200': '#000000',        // subtle background
        'base-300': '#000000',        // even more subtle
        'base-content': '#ffffff',    // white text for contrast
        'primary': '#ffffff',         // white primary buttons
        'primary-content': '#000000', // black text on primary
        'secondary': '#1f1f1f',       // very dark grey (optional)
        'accent': '#ffffff',          // white accents
        'neutral': '#000000',         // black neutral
        'info': '#ffffff',
        'success': '#ffffff',
        'warning': '#ffffff',
        'error': '#ff5555',  
      },
    },
  ],
},
  }