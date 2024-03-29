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
        primary3: '#1E8A6F',
        primary4: '#0C5E5A',
        point1: '#FFE377',
        point2: '#FF8436',
        point3: '#CA3F13',
        point4: '#FB2414',
        state1: '#F7C0AE',
        state2: '#CB5D45',
        state3: '#B5DEF6',
        state4: '#5C93D4',
        state5: '#F4EDAC',
        state6: '#D5B02D',
        gray0: '#F1F2F4',
        gray1: '#EEEFF2',
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
      spacing: {
        '6': '6px',
        '9': '9px',
        '12': '12px',
        '14': '14px',
        '18': '18px',
        '20': '20px',
        '30': '30px',
        '32': '32px',
      },
      borderRadius: {
        '6': '6px',
        '12': '12px',
      },
      minHeight: {
        '268': '268px',
      },
      width: {
        '64': '64px',
      },
      height: {
        '48': '48px',
      },
      gap: {
        '8': '8px',
        '8.5': '8.5px',
        '10': '10px',
        '22': '22px',
        '25': '25px',
      },
    },
  },
  plugins: [],
};
export default config;
