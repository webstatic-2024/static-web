import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6f00eb",
        black: "#000",
        "text-01": "#212123",
        "text-02": "#110d34",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        'custom-pattern': "url('https://assets.website-files.com/641c0410c17bb111523922e8/64352ebe31b3f575af86e331_pattern.png')",
      },
    },
  },
  plugins: [],
};
export default config;
