import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          background: {
            DEFAULT: { value: '#fafafa' },
            _dark: { value: '#18181b' },
          },
          foreground: {
            DEFAULT: { value: '#d4d4d8' },
            _dark: { value: '#3f3f46' },
          },
          card: {
            DEFAULT: { value: '#d4d4d8' },
            _dark: { value: '#71717a' },
          },
          cardForeground: {
            DEFAULT: { value: '#d4d4d8' },
            _dark: { value: '#71717a' },
          },
          popover: {
            DEFAULT: { value: '#a1a1aa' },
            _dark: { value: '#52525b' },
          },
          popoverForeground: {},
          text: {
            DEFAULT: { value: '#18181b' },
            _dark: { value: '#fafafa' },
          },
          primary: {},
          primaryForeground: {},
          secondary: {},
          secondaryForeground: {},
          muted: {},
          mutedForeground: {},
          accent: {},
          accentForeground: {},
          destructive: {},
          destructiveForeground: {},
          border: {},
          input: {},
          ring: {},
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
