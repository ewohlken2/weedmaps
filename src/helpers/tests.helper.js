import { css } from 'styled-components';
import { config } from '../constants/config';

export const bp = Object.keys(config.SIZES).reduce((_device, key) => {
  _device[key] = (...args) => css`
    @media (max-width: ${config.SIZES[key]}px) {
      ${css(...args)};
    }
  `;
});
