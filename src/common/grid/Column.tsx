import styled from 'styled-components';
import media from '../_helpers/media';

const Column = styled.div.attrs(({ styles }: any) => ({
  styles: { ...styles },
}))`
  box-sizing: border-box;
  padding: ${({ theme }) => `0 ${theme.GRID.gutter}rem`};
  width: ${({ styles, theme }: any) => (100 / theme.GRID.columns) * (styles.xs || theme.GRID.columns)}%;
  ${({ styles, theme }: any) => styles.sm && media.sm(`
    width: ${(100 / theme.GRID.columns) * (styles.sm || theme.GRID.columns)}%;
  `)}
  ${({ styles, theme }: any) => styles.md && media.md(`
    width: ${(100 / theme.GRID.columns) * (styles.md || theme.GRID.columns)}%;
  `)}
  ${({ styles, theme }: any) => styles.lg && media.lg(`
    width: ${(100 / theme.GRID.columns) * (styles.lg || theme.GRID.columns)}%;
  `)}
  ${({ styles, theme }: any) => styles.xl && media.xl(`
    width: ${(100 / theme.GRID.columns) * (styles.xl || theme.GRID.columns)}%;
  `)}
`;

export default Column;
