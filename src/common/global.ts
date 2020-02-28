import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body,
  #root {
    background-color: ${({ theme }: any) => theme.COLORS.gray10};
    color: ${({ theme }: any) => theme.COLORS.black};
    height: 100%;
    margin: 0;
    min-height: 100%;
  }
  * {
    font-family: ${({ theme }: any) => theme.FONT.family};
  }
`;
