'use client';
import React from 'react';
import { useColorMode } from './ColorModeProvider';

export const ColorModeToggle = () => {
  const { colorMode, setColorMode, effectiveColorMode } = useColorMode();

  const handleToggle = () => {
    setColorMode(
      colorMode === 'system'
        ? effectiveColorMode === 'light'
          ? 'dark'
          : 'light'
        : colorMode === 'light'
          ? 'dark'
          : 'system'
    );
  };

  return (
    <button type='button' onClick={handleToggle}>
      {colorMode === 'system'
        ? `System (${effectiveColorMode})`
        : colorMode === 'light'
          ? 'light'
          : 'Dark'}
    </button>
  );
};
