'use client';
import type React from 'react';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type ColorMode = 'light' | 'dark' | 'system';

type ColorModeContextType = {
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
  effectiveColorMode: 'light' | 'dark';
};

const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined);

export const useColorMode = () => {
  const context = useContext(ColorModeContext);

  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
};

type Props = {
  children: ReactNode;
};

export const ColorModeProvider: React.FC<Props> = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>('light');

  //localStorageへアクセスは副作用になるためuseEffectで実行
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('colorMode') as ColorMode | null;
      if (savedMode) {
        setColorMode(savedMode);
      }
    }
  }, []);

  const [effectiveColorMode, setEffectiveColorMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateEffectiveColorMode = () => {
      if (colorMode === 'system') {
        setEffectiveColorMode(mediaQuery.matches ? 'dark' : 'light');
      } else {
        setEffectiveColorMode(colorMode);
      }
    };

    updateEffectiveColorMode();

    mediaQuery.addEventListener('change', updateEffectiveColorMode);

    return () => {
      mediaQuery.addEventListener('change', updateEffectiveColorMode);
    };
  }, [colorMode]);

  useEffect(() => {
    localStorage.setItem('colorMode', colorMode);

    if (effectiveColorMode === 'dark') {
      document.documentElement.dataset.colorMode = 'dark';
    } else {
      document.documentElement.dataset.colorMode = 'light';
    }
  }, [colorMode, effectiveColorMode]);

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode, effectiveColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
