// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyblue: "#87CEEB",  // Customize as needed
        navyblue: "#001F54", // Customize as needed
      },
    },
  },
  plugins: [],
};
