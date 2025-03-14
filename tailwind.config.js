/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        inter: ['InterRegular', 'sans-serif'],
        interBold: ['InterBold', 'sans-serif'],
        interSemi: ['InterSemiBold', 'sans-serif'],
        JetBrainsMonoBold: ['JetBrainsMonoBold', 'monospace'],
        JetBrainsMonoSemiBold: ['JetBrainsMonoSemiBold', 'monospace'],
        JetBrainsMonoRegular: ['JetBrainsMonoRegular', 'monospace'],
        JetBrainsMonoThin: ['JetBrainsMonoThin', 'monospace'],
      },
    },
  },
  plugins: [],
}