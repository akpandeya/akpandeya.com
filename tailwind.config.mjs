/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#fafafa',
        text: '#1a1a1a',
        accent: '#0d7490',
        'accent-hover': '#0e7490',
        'accent-dark': '#06b6d4',
        // Category colors for tech badges
        'backend-from': '#3b82f6',
        'backend-to': '#2563eb',
        'data-from': '#a855f7',
        'data-to': '#7c3aed',
        'devops-from': '#10b981',
        'devops-to': '#059669',
        'frontend-from': '#f97316',
        'frontend-to': '#ea580c',
        'optimization-from': '#ec4899',
        'optimization-to': '#db2777',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0d7490 0%, #06b6d4 100%)',
        'gradient-backend': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        'gradient-data': 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
        'gradient-devops': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'gradient-frontend': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        'gradient-optimization': 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
      },
      boxShadow: {
        'glow-teal': '0 0 20px rgba(13, 116, 144, 0.3)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
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
