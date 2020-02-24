import styled from 'styled-components';
import media from '../_helpers/media';

const Container = styled.section.attrs(({ styles }: any) => ({
  styles: { ...styles },
}))`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: ${({ styles }: any) => styles.height || 'auto'};
  margin: 0 auto;
  box-sizing: border-box;
  padding: ${({ theme }) => `0 ${theme.GRID.gutter}rem`};
  width: 100%;
  ${({ styles, theme }: any) => media.sm(`
    max-width: ${styles.fluid
    ? '100%'
    : `${theme.GRID.containerWidth.sm}rem`}
  ;`)}
  ${({ styles, theme }: any) => media.md(`
    max-width: ${styles.fluid
    ? '100%'
    : `${theme.GRID.containerWidth.md}rem`}
  ;`)}
  ${({ styles, theme }: any) => media.lg(`
    max-width: ${styles.fluid
    ? '100%'
    : `${theme.GRID.containerWidth.lg}rem`}
  ;`)}
  ${({ styles, theme }: any) => media.xl(`
    max-width: ${styles.fluid
    ? '100%'
    : `${theme.GRID.containerWidth.xl}rem`}
  ;`)}
`;

export default Container;
