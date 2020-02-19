import { css } from 'styled-components';
import theme from '../theme';

const media = Object.keys(theme.GRID.breakpoints).reduce((acc: any, label: string) => {
  acc[label] = (...args: any) => css`
      @media (min-width: ${theme.GRID.breakpoints[label as keyof {}]}rem) {
      ${css(args)}
      }
  `;
  return acc;
}, {});

export default media;
