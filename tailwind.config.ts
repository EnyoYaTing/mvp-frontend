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
    borderWidth: {
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px'
    },
    extend: {
      colors: {
        primary: {
          900: '#334155',
          800: '#475569',
          700: '#64748b',
          600: '#94a3b8',
        },
        secondary: {
          900: '',
          800: '',
          700: '',
        },
        red: {
          900: '#dc2626',
          800: '#ef4444',
        },
        // error: {}
      },
      width: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
export default config;
