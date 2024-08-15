import type React from 'react'
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type ColorMode = 'light' | 'dark'

type ColorModeContextType = {
  colorMode: ColorMode
  setColorMode: (mode: ColorMode) => void
}

const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined)

export const useColorMode = () => {
  const context = useContext(ColorModeContext)

  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider')
  }
  return context
}

type Props = {
  children: ReactNode
}

export const ColorModeProvider: React.FC<Props> = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('colorMode') as ColorMode
      return savedMode || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    localStorage.setItem('colorMode', colorMode)

    if (colorMode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [colorMode])

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  )
}
