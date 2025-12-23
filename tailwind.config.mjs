/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#fafafa',
        text: '#1a1a1a',
        accent: '#0d7490',
        'accent-hover': '#0e7490',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '720px',
      },
      lineHeight: {
        relaxed: '1.65',
      },
    },
  },
  plugins: [],
};
