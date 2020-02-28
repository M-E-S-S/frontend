const COLORS = {
  black: '#090A0C',
  blue: '#48A1FF',
  blue10: '#2286EF',
  blue20: '#0E63BD',
  blue30: '#06376B',
  gray10: '#EDF1F7',
  gray20: '#BCC1CF',
  gray50: '#DA1B12',
  green: '#33AF6D',
  red: '#FC345A',
  white: '#FFFFFF',
  yellow: '#f5A623',
};

const GRID = {
  breakpoints: {
    xs: 0,
    sm: 36, // 576px
    md: 48, // 768px
    lg: 62, // 992px
    xl: 75, // 1200px
  },
  columns: 12,
  containerWidth: {
    xs: 0,
    sm: 33.75, // 540px
    md: 45, // 720px
    lg: 60, // 960px
    xl: 71.25, // 1140px
  },
  gutter: 2,
};

export const BORDER = {
  color: COLORS.gray10,
  colorFocus: COLORS.blue,
  radius: 0.25,
  width: 0.0625,
};

export const SPACING = {
  padding: {
    sm: [0.375, 1],
    md: [0.5, 1.25],
    lg: [0.625, 1.5],
  },
};

export const FONT = {
  color: COLORS.black,
  family: '"Roboto", sans-serif',
  lineHeight: 1.5,
  size: {
    sm: 0.875,
    md: 1,
    lg: 1.125,
  },
  weight: {
    bold: 600,
    regular: 400,
  },
};

// Components
export const BUTTON = {
  border: {
    radius: BORDER.radius,
    width: BORDER.width,
  },
  color: {
    primary: COLORS.blue,
    secondary: COLORS.yellow,
  },
  font: {
    lineHeight: FONT.lineHeight,
    size: FONT.size,
  },
  padding: {
    sm: [0.375, 1],
    md: [0.5, 1.25],
    lg: [0.625, 1.5],
  },
};

export default {
  BUTTON,
  COLORS,
  FONT,
  GRID,
};
