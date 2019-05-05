import { css } from 'styled-components';
import config from '../constants/config';

export const media = Object.keys(config.SIZES).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (min-width: ${config.SIZES[key]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
