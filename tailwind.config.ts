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
        gray: {
          primary: '#334155',
          secondary: '#64748b',
        },
        red: {
          primary: '#dc2626',
          secondary: '#ef4444',
        },
      },
    },
  },
  plugins: [],
};
export default config;
