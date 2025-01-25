import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
		fontFamily: {
			gilroy: ['Gilroy', 'sans-serif'],
			gilroy_bold: ['GilroyBold', 'sans-serif'],
			gilroy_medium: ['GilroyMedium', 'sans-serif'],
			gilroy_light: ['GilroyLight', 'sans-serif'],	
		  },
    
    },
  },
};

export default config;
