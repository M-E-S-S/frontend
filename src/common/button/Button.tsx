import styled from 'styled-components';

// Helpers
import {
  marginCSS,
  paddingCSS,
} from '../_helpers/spacing';
import { hexToRgb } from '../_helpers/colors';

export const Button = styled.button.attrs(({ styles } :any) => ({
  styles: {
    size: 'md',
    type: 'primary',
    ...styles,
  },
}))`
  align-items: center;
  background-color: ${({ styles, theme }) => ((styles.ghost || styles.link)
    ? 'transparent'
    : theme.BUTTON.color[styles.type])};
  border: ${({ styles, theme }) => (`
    ${theme.BUTTON.border.width}rem
    solid
    ${styles.link ? 'transparent' : theme.BUTTON.color[styles.type]}
  `)};
  border-radius: ${({ theme }) => `${theme.BUTTON.border.radius}rem`};
  box-sizing: border-box;
  color: ${({ styles, theme }) => ((styles.ghost || styles.link)
    ? theme.BUTTON.color[styles.type]
    : theme.COLORS.white)};
  cursor: pointer;
  display: inline-flex;
  font-size: ${({ styles, theme }) => `${theme.BUTTON.font.size[styles.size]}rem`};
  justify-content: center;
  line-height: ${({ theme }) => theme.BUTTON.font.lineHeight};
  margin: ${({ styles }) => marginCSS({
    margin: 0,
    ...styles,
  })};
  padding: ${({ styles, theme }) => paddingCSS({
    padding: theme.BUTTON.padding[styles.size],
    ...styles,
  })};
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
  width: ${({ styles }) => (styles.block ? '100%' : 'auto')};

  /* DISABLED */
  &:disabled,
  &[disabled] {
    background-color: ${({ styles, theme }) => ((styles.ghost || styles.link)
    ? 'transparent'
    : `rgba(${hexToRgb(theme.BUTTON.color[styles.type])}, 0.5)`)};
    border-color: ${({ styles, theme }) => `rgba(${hexToRgb(theme.BUTTON.color[styles.type])}, 0.5)`};
    color: ${({ styles, theme }) => ((styles.ghost || styles.link)
    ? `rgba(${hexToRgb(theme.BUTTON.color[styles.type])}, 0.5)`
    : theme.COLORS.white)};
  }
  /* HOVER */
  &:hover:not([disabled]):not(:disabled) {
    background-color: ${({ styles, theme }) => `rgba(${hexToRgb(theme.BUTTON.color[styles.type])}, 0.9)`};
    border-color: ${({ styles, theme }) => `rgba(${hexToRgb(theme.BUTTON.color[styles.type])}, 0.9)`};
    color: ${({ theme }) => theme.COLORS.white};
  }
  /* ACTIVE */
  &:active:not([disabled]):not(:disabled) {
    background-color: ${({ styles, theme }) => theme.BUTTON.color[`${styles.type}Active`]};
    color: ${({ theme }) => theme.COLORS.white};
  }
  /* FOCUS */
  &:focus {
    outline: 0;
  }
`;

export default Button;
