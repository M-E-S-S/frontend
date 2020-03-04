import styled from 'styled-components';

// Helpers
import {
  marginCSS,
  paddingCSS,
} from '../_helpers/spacing';
import { hexToRgb } from '../_helpers/colors';

export const Input = styled.input.attrs(({ styles } :any) => ({
  styles: {
    size: 'md',
    type: 'primary',
    ...styles,
  },
}))`
  align-items: center;
  background-color: ${({ styles, theme }) => (styles.colored
    ? theme.INPUT.color[styles.type]
    : 'transparent')};
  border: ${({ styles, theme }) => (`
    ${theme.INPUT.border.width}rem
    solid
    ${theme.INPUT.color[styles.type]}
  `)};
  border-radius: ${({ theme }) => `${theme.INPUT.border.radius}rem`};
  box-sizing: border-box;
  color: ${({ styles, theme }) => (styles.colored
    ? theme.COLORS.white
    : theme.INPUT.color[styles.type])};
  display: inline-flex;
  font-size: ${({ styles, theme }) => `${theme.INPUT.font.size[styles.size]}rem`};
  justify-content: center;
  line-height: ${({ theme }) => theme.INPUT.font.lineHeight};
  margin: ${({ styles }) => marginCSS({
    margin: 0,
    ...styles,
  })};
  padding: ${({ styles, theme }) => paddingCSS({
    padding: theme.INPUT.padding[styles.size],
    ...styles,
  })};
  text-decoration: none;
  vertical-align: middle;
  width: ${({ styles }) => (styles.block ? '100%' : 'auto')};
  
  /* PLACEHOLDER */
  &::placeholder {
    color: ${({ styles, theme }) => (styles.colored
    ? `rgba(${hexToRgb(theme.COLORS.white)}, 0.9)`
    : `rgba(${hexToRgb(theme.INPUT.color[styles.type])}, 0.7)`)};
  }
  
  /* DISABLED */
  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    background-color: ${({ styles, theme }) => (styles.colored
    ? `rgba(${hexToRgb(theme.INPUT.color[styles.type])}, 0.5)`
    : 'transparent')};
    border-color: ${({ styles, theme }) => `rgba(${hexToRgb(theme.INPUT.color[styles.type])}, 0.5)`};
    color: ${({ styles, theme }) => (styles.colored
    ? theme.COLORS.white
    : `rgba(${hexToRgb(theme.INPUT.color[styles.type])}, 0.5)`)};
  }
  /* HOVER */
  &:hover:not([disabled]):not(:disabled) {
    background-color: ${({ styles, theme }) => (styles.colored
    ? `rgba(${hexToRgb(theme.INPUT.color[styles.type])}, 0.9)`
    : 'transparent'
  )};
    border-color: ${({ styles, theme }) => `rgba(${hexToRgb(theme.INPUT.color[styles.type])}, 0.9)`};
    color: ${({ styles, theme }) => (styles.colored
    ? theme.COLORS.white
    : `rgba(${hexToRgb(theme.INPUT.color[styles.type])}, 0.8)`)};
  }
  /* ACTIVE */
  &:active:not([disabled]):not(:disabled) {
    background-color: ${({ styles, theme }) => (styles.colored
    ? theme.INPUT.color[`${styles.type}Active`]
    : 'transparent')};
    color: ${({ styles, theme }) => (styles.colored
    ? theme.COLORS.white
    : `rgba(${hexToRgb(theme.INPUT.color[styles.type])}, 0.8)`)};
  }
  /* FOCUS */
  &:focus {
    outline: 0;
  }
`;

export default Input;
