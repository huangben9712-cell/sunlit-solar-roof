/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'deep-green': '#0f4d3a',
        'deep-green-2': '#073b30',
        'soft-green': '#edf6f1',
        amber: '#D4A056',
        'amber-dark': '#C0904D',
        charcoal: '#17232b',
        slate: '#68757d',
        'light-gray': '#f8faf8',
        border: '#e5e8e6',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'system-ui', 'sans-serif'],
        editorial: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};