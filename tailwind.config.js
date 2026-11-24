/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: { md: "900px" },
      colors: {
        night: "#2a1a3a",   // aubergine
        night2: "#3d2754",
        mist: "#f1ecf5",    // orchid mist
        paper: "#fbf9fc",
        peacock: "#0e7c7b",
        brass: "#c9a24b",
        ink: "#2b2233",
        mut: "#655a72",
        line: "#ded5e6",
      },
      fontFamily: {
        fd: ["var(--fd)", "Georgia", "serif"],
        fb: ["var(--fb)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        ripples:
          "repeating-radial-gradient(circle at 88% 18%, transparent 0 34px, rgba(255,255,255,0.045) 34px 35px)",
      },
      keyframes: {
        rise: { from: { clipPath: "inset(100% 0 0 0)" }, to: { clipPath: "inset(0)" } },
      },
      animation: { rise: "rise 1.1s cubic-bezier(.2,.7,.2,1) both" },
    },
  },
  plugins: [],
};
