module.exports = {
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
  plugins: [],
}