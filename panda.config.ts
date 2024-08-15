import { defineConfig } from '@pandacss/dev';

import { tokens } from './theme/tokens';
import { semanticTokens } from './theme/semantic-tokens';

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: 'react',

  // Where to look for your css declarations
  include: [
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}'
  ],

  // Files to exclude
  exclude: [],
  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &'
  },

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      semanticTokens,
      tokens
    }
  },

  // The output directory for your css system
  outdir: 'styled-system'
});
