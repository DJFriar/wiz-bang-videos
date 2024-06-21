import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wizSilver': '#B9B9B9',
        'wizBrightRed': '#B40404',
        'wizDarkRed': '#7C0303',
        'wizDarkestBlue': '#00152D',
        'wizDarkBlue': '#002857',
        'wizBlue': '#0464A8',
        'wizLightBlue': '#0DDEFF',
      }
    },
  },
  plugins: [],
}

export default config
