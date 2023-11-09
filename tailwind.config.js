/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '5px 5px 0px 0px rgb(0 0 0 / 0.1), -10px 0px 30px 5px rgb(0 0 0 / 0.06)',
      },
      colors: {
        'regal-blue': '#243c5a',
      },
    }
  },
  plugins: [],
}

