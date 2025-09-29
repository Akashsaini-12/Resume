/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          sidebar: '#2D3748',
        },
        spacing: {
          '128': '32rem',
        },
      },
    },
    plugins: [],
  }