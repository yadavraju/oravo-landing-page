/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // Disable the canonical class suggestions
  },
  future: {
    // Disable hoverOnlyWhenSupported if it causes issues
    hoverOnlyWhenSupported: false,
  },
  // Suppress arbitrary value warnings
  experimental: {
    // This will suppress the canonical class warnings
  },
}
