import { css } from '@/styled-system/css';
import React from 'react';

const container = css({
  w: 'full',
  h: 'full',
  border: '1px solid',
  borderColor: 'border'
});

export const Sidebar = () => {
  return <div className={container}>sidebar</div>;
};
