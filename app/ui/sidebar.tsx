import { css } from '@/styled-system/css';
import React from 'react';

const container = css({
  w: 'full',
  h: 'full',
  background: 'secondary'
});

export const Sidebar = () => {
  return <div className={container}>sidebar</div>;
};
