import { defineSemanticTokens } from '@pandacss/dev';

export const semanticTokens = defineSemanticTokens({
  colors: {
    background: {
      value: {
        base: '{colors.white}',
        _dark: '{colors.dark}'
      }
    },
    foreground: {
      value: {
        base: '{colors.neutral.300}',
        _dark: '{colors.neutral.700}'
      }
    },
    card: {
      value: {
        base: '{colors.neutral.300}',
        _dark: '{colors.neutral.700}'
      }
    },
    cardForeground: {
      value: {
        base: '{colors.neutral.300}',
        _dark: '{colors.neutral.700}'
      }
    },
    popover: {
      value: {
        base: '{colors.neutral.100}',
        _dark: '{colors.neutral.800}'
      }
    },
    popoverForeground: {
      value: {
        base: '{colors.neutral.100}',
        _dark: '{colors.neutral.800}'
      }
    },
    text: {
      value: {
        base: '{colors.dark}',
        _dark: '{colors.white}'
      }
    },
    primary: {
      value: {
        base: '{colors.orange.500}',
        _dark: '{colors.orange.300}'
      }
    },
    primaryForeground: {
      value: {
        base: '{colors.orange.500}',
        _dark: '{colors.orange.300}'
      }
    },
    secondary: {
      value: {
        base: '{colors.yellow.500}',
        _dark: '{colors.yellow.300}'
      }
    },
    secondaryForeground: {
      value: {
        base: '{colors.yellow.500}',
        _dark: '{colors.yellow.300}'
      }
    },
    muted: {
      value: {
        base: '{colors.gray.200}',
        _dark: '{colors.gray.800}'
      }
    },
    mutedForeground: {
      value: {
        base: '{colors.gray.200}',
        _dark: '{colors.gray.800}'
      }
    },
    accent: {
      value: {
        base: '{colors.orange.900}',
        _dark: '{colors.orange.900}'
      }
    },
    accentForeground: {
      value: {
        base: '{colors.orange.900}',
        _dark: '{colors.orange.900}'
      }
    },
    destructive: {
      value: {
        base: '{colors.red.700}',
        _dark: '{colors.red.400}'
      }
    },
    destructiveForeground: {
      value: {
        base: '{colors.red.700}',
        _dark: '{colors.red.400}'
      }
    },
    border: {
      value: {
        base: '{colors.neutral.400}',
        _dark: '{colors.neutral.700}'
      }
    },
    input: {
      value: {
        base: '{colors.neutral.200}',
        _dark: '{colors.neutral.800}'
      }
    },
    ring: {
      value: {
        base: '{colors.blackAlpha.300}',
        _dark: '{colors.whiteAlpha.500}'
      }
    }
  }
});
