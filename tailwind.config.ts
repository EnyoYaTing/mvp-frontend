/* Color: https://tailwindcss.com/docs/customizing-colors */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1264px',
    },
    // colors: {},
    extend: {
      colors: {
        primary: {
          900: '#334155',
          800: '#475569',
          700: '#64748b',
          600: '#94a3b8',
        },
        error: {
          900: '#dc2626',
          800: '#ef4444',
        },
      },
    },
  },
  plugins: [],
};
export default config;
