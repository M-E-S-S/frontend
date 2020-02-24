import styled from 'styled-components';

const Row = styled.div.attrs(({ styles }: any) => ({
  styles: { ...styles },
}))`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  box-sizing: border-box;
  height: ${({ styles }: any) => styles.height || 'auto'};
  margin: ${({ theme }: any) => `0 -${theme.GRID.gutter}rem`};
  &:after {
      display: block;
      content: "";
      clear: both;
  }
`;

export default Row;
