import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
  colors: {
    background: {
      DEFAULT: { value: 'colors.white' },
      _dark: { value: 'colors.dark' },
    },
    foreground: {
      DEFAULT: { value: 'colors.neutral.300' },
      _dark: { value: 'colors.neutral.700' },
    },
    card: {
      DEFAULT: { value: 'colors.neutral.300' },
      _dark: { value: 'colors.neutral.700' },
    },
    cardForeground: {
      DEFAULT: { value: 'colors.neutral.300' },
      _dark: { value: 'colors.neutral.700' },
    },
    popover: {
      DEFAULT: { value: 'colors.neutral.100' },
      _dark: { value: 'colors.neutral.800' },
    },
    popoverForeground: {
      DEFAULT: { value: 'colors.neutral.100' },
      _dark: { value: 'colors.neutral.800' },
    },
    text: {
      DEFAULT: { value: 'colors.dark' },
      _dark: { value: 'colors.white' },
    },
    primary: {
      DEFAULT: { value: 'colors.orange.500' },
      _dark: { value: 'colors.orange.300' },
    },
    primaryForeground: {
      DEFAULT: { value: 'colors.orange.500' },
      _dark: { value: 'colors.orange.300' },
    },
    secondary: {
      DEFAULT: { value: 'colors.yellow.500' },
      _dark: { value: 'colors.yellow.300' },
    },
    secondaryForeground: {
      DEFAULT: { value: 'colors.yellow.500' },
      _dark: { value: 'colors.yellow.300' },
    },
    muted: {
      DEFAULT: { value: 'colors.gray.200' },
      _dark: { value: 'colors.gray.800' },
    },
    mutedForeground: {
      DEFAULT: { value: 'colors.gray.200' },
      _dark: { value: 'colors.gray.800' },
    },
    accent: {
      DEFAULT: { value: 'colors.orange.900' },
      _dark: { value: 'colors.orange.900' },
    },
    accentForeground: {
      DEFAULT: { value: 'colors.orange.900' },
      _dark: { value: 'colors.orange.900' },
    },
    destructive: {
      DEFAULT: { value: 'colors.red.700' },
      _dark: { value: 'colors.red.400' },
    },
    destructiveForeground: {
      DEFAULT: { value: 'colors.red.700' },
      _dark: { value: 'colors.red.400' },
    },
    border: {
      DEFAULT: { value: 'colors.neutral.400' },
      _dark: { value: 'colors.neutral.700' },
    },
    input: {
      DEFAULT: { value: 'color.neutral.200' },
      _dark: { value: 'color.neutral.800' },
    },
    ring: {
      DEFAULT: { value: 'color.blackAlpha.300' },
      _dark: { value: 'color.whiteAlpha.500' },
    },
  },
})
