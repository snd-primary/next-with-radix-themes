import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
  colors: {
    background: {
      value: {
        DEFAULT: '{colors.white}',
        _dark: '{colors.dark}',
      },
    },
    foreground: {
      value: {
        DEFAULT: '{colors.neutral.300}',
        _dark: '{colors.neutral.700}',
      },
    },
    card: {
      value: {
        DEFAULT: '{colors.neutral.300}',
        _dark: '{colors.neutral.700}',
      },
    },
    cardForeground: {
      value: {
        DEFAULT: '{colors.neutral.300}',
        _dark: '{colors.neutral.700}',
      },
    },
    popover: {
      value: {
        DEFAULT: '{colors.neutral.100}',
        _dark: '{colors.neutral.800}',
      },
    },
    popoverForeground: {
      value: {
        DEFAULT: '{colors.neutral.100}',
        _dark: '{colors.neutral.800}',
      },
    },
    text: {
      value: {
        DEFAULT: '{colors.dark}',
        _dark: '{colors.white}',
      },
    },
    primary: {
      value: {
        DEFAULT: '{colors.orange.500}',
        _dark: '{colors.orange.300}',
      },
    },
    primaryForeground: {
      value: {
        DEFAULT: '{colors.orange.500}',
        _dark: '{colors.orange.300}',
      },
    },
    secondary: {
      value: {
        DEFAULT: '{colors.yellow.500}',
        _dark: '{colors.yellow.300}',
      },
    },
    secondaryForeground: {
      value: {
        DEFAULT: '{colors.yellow.500}',
        _dark: '{colors.yellow.300}',
      },
    },
    muted: {
      value: {
        DEFAULT: '{colors.gray.200}',
        _dark: '{colors.gray.800}',
      },
    },
    mutedForeground: {
      value: {
        DEFAULT: '{colors.gray.200}',
        _dark: '{colors.gray.800}',
      },
    },
    accent: {
      value: {
        DEFAULT: '{colors.orange.900}',
        _dark: '{colors.orange.900}',
      },
    },
    accentForeground: {
      value: {
        DEFAULT: '{colors.orange.900}',
        _dark: '{colors.orange.900}',
      },
    },
    destructive: {
      value: {
        DEFAULT: '{colors.red.700}',
        _dark: '{colors.red.400}',
      },
    },
    destructiveForeground: {
      value: {
        DEFAULT: '{colors.red.700}',
        _dark: '{colors.red.400}',
      },
    },
    border: {
      value: {
        DEFAULT: '{colors.neutral.400}',
        _dark: '{colors.neutral.700}',
      },
    },
    input: {
      value: {
        DEFAULT: '{colors.neutral.200}',
        _dark: '{colors.neutral.800}',
      },
    },
    ring: {
      value: {
        DEFAULT: '{colors.blackAlpha.300}',
        _dark: '{colors.whiteAlpha.500}',
      },
    },
  },
})
