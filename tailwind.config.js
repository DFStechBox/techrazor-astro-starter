/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        peach: '#F8E8D1',
        primary: '#ff6363',
        secondary: {
          100: '#e2e2d5',
          200: '#888883'
        }
      }          
    }
  },
  plugins: []
};
