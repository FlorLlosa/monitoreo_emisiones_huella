// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          dark: "#1C1F26",
          medium: "#2E3440",
          light: "#ECEFF4",
        },
        alert: {
          danger: "#D90429",
          warning: "#FFB703",
          success: "#2A9D8F",
        },
        energy: {
          primary: "#005F73",
          secondary: "#0A9396",
          accent: "#94D2BD",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.btn-primary': {
          backgroundColor: '#005F73',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '0.375rem',
          fontWeight: '600',
          '&:hover': {
            backgroundColor: '#0A9396',
          },
        },
        '.btn-danger': {
          backgroundColor: '#D90429',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '0.375rem',
          fontWeight: '600',
          '&:hover': {
            backgroundColor: '#9b021d',
          },
        },
        '.card': {
          backgroundColor: '#ECEFF4',
          borderRadius: '0.5rem',
          padding: '1rem',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        },
        '.card-alert': {
          backgroundColor: '#FFB703',
          color: '#1C1F26',
          borderRadius: '0.5rem',
          padding: '1rem',
          fontWeight: '600',
        },
      })
    }
  ],
}