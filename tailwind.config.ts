import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary1: '#52C5A6',
        primary2: '#3CAA8D',
        primary3: '#0C5E5A',
        point1: '#FFE377',
        point2: '#FF8436',
        point3: '#CA3F13',
        gray1: '#F1F2F4',
        gray2: '#E0E1E6',
        gray3: '#CCCFD7',
        gray4: '#B5B9C5',
        gray5: '#9299AA',
        gray6: '#6E768C',
        gray7: '#4E5464',
        gray8: '#363A45',
        white: '#FFFFFF',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
export default config;
