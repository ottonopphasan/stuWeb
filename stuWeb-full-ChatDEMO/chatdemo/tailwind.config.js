module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'custom-gray-183138': '#183138',
        'custom-gray-3e3e3e': '#3e3e3e',
        'custom-gray-7e858c': '#7e858c',
      },
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
      },
      fontSize: {
        base: "1rem",
        sm: "0.875rem",
        lg: "1.125rem",
        "17px": "17px",
      },
      lineHeight: {
        snug: "1.375",
        relaxed: "1.625",
        normal: "1.5",
      },
    },
  },
  plugins: [],
};