import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';
import isArray from 'lodash/isArray';

import { checkAndFixUnit } from './units';

export const marginCSS = ({
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginUnit = 'rem',
}: any) => {
  let mrg = margin;
  let mrgTop = marginTop;
  let mrgRight = marginRight;
  let mrgBottom = marginBottom;
  let mrgLeft = marginLeft;

  if (isString(margin)) {
    mrg = margin.split(' ');
  } else if (isArray(margin)) {
    mrg = [...margin];
  } else if (isNumber(margin)) {
    mrg = [margin, margin, margin, margin];
  } else {
    mrg = [mrgTop || 0, mrgRight || 0, mrgBottom || 0, mrgLeft || 0];
  }

  if (mrg.length === 1) {
    mrgTop = checkAndFixUnit(marginTop !== undefined ? marginTop : mrg[0], marginUnit);
    mrgRight = checkAndFixUnit(marginRight !== undefined ? marginRight : mrg[0], marginUnit);
    mrgBottom = checkAndFixUnit(marginBottom !== undefined ? marginBottom : mrg[0], marginUnit);
    mrgLeft = checkAndFixUnit(marginLeft !== undefined ? marginLeft : mrg[0], marginUnit);
  } else if (mrg.length === 2) {
    mrgTop = checkAndFixUnit(marginTop !== undefined ? marginTop : mrg[0], marginUnit);
    mrgRight = checkAndFixUnit(marginRight !== undefined ? marginRight : mrg[1], marginUnit);
    mrgBottom = checkAndFixUnit(marginBottom !== undefined ? marginBottom : mrg[0], marginUnit);
    mrgLeft = checkAndFixUnit(marginLeft !== undefined ? marginLeft : mrg[1], marginUnit);
  } else if (mrg.length === 3) {
    mrgTop = checkAndFixUnit(marginTop !== undefined ? marginTop : mrg[0], marginUnit);
    mrgRight = checkAndFixUnit(marginRight !== undefined ? marginRight : mrg[1], marginUnit);
    mrgBottom = checkAndFixUnit(marginBottom !== undefined ? marginBottom : mrg[2], marginUnit);
    mrgLeft = checkAndFixUnit(marginLeft !== undefined ? marginLeft : mrg[1], marginUnit);
  } else {
    mrgTop = checkAndFixUnit(marginTop !== undefined ? marginTop : mrg[0], marginUnit);
    mrgRight = checkAndFixUnit(marginRight !== undefined ? marginRight : mrg[1], marginUnit);
    mrgBottom = checkAndFixUnit(marginBottom !== undefined ? marginBottom : mrg[2], marginUnit);
    mrgLeft = checkAndFixUnit(marginLeft !== undefined ? marginLeft : mrg[3], marginUnit);
  }
  return `${mrgTop} ${mrgRight} ${mrgBottom} ${mrgLeft}`;
};

export const paddingCSS = ({
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingUnit = 'rem',
}: any) => {
  let pad = padding;
  let padTop = paddingTop;
  let padRight = paddingRight;
  let padBottom = paddingBottom;
  let padLeft = paddingLeft;

  if (isString(padding)) {
    pad = padding.split(' ');
  } else if (isArray(padding)) {
    pad = [...padding];
  } else if (isNumber(padding)) {
    pad = [padding, padding, padding, padding];
  } else {
    pad = [padTop || 0, padRight || 0, padBottom || 0, padLeft || 0];
  }

  if (pad.length === 1) {
    padTop = checkAndFixUnit(paddingTop !== undefined ? paddingTop : pad[0], paddingUnit);
    padRight = checkAndFixUnit(paddingRight !== undefined ? paddingRight : pad[0], paddingUnit);
    padBottom = checkAndFixUnit(paddingBottom !== undefined ? paddingBottom : pad[0], paddingUnit);
    padLeft = checkAndFixUnit(paddingLeft !== undefined ? paddingLeft : pad[0], paddingUnit);
  } else if (pad.length === 2) {
    padTop = checkAndFixUnit(paddingTop !== undefined ? paddingTop : pad[0], paddingUnit);
    padRight = checkAndFixUnit(paddingRight !== undefined ? paddingRight : pad[1], paddingUnit);
    padBottom = checkAndFixUnit(paddingBottom !== undefined ? paddingBottom : pad[0], paddingUnit);
    padLeft = checkAndFixUnit(paddingLeft !== undefined ? paddingLeft : pad[1], paddingUnit);
  } else if (pad.length === 3) {
    padTop = checkAndFixUnit(paddingTop !== undefined ? paddingTop : pad[0], paddingUnit);
    padRight = checkAndFixUnit(paddingRight !== undefined ? paddingRight : pad[1], paddingUnit);
    padBottom = checkAndFixUnit(paddingBottom !== undefined ? paddingBottom : pad[2], paddingUnit);
    padLeft = checkAndFixUnit(paddingLeft !== undefined ? paddingLeft : pad[1], paddingUnit);
  } else {
    padTop = checkAndFixUnit(paddingTop !== undefined ? paddingTop : pad[0], paddingUnit);
    padRight = checkAndFixUnit(paddingRight !== undefined ? paddingRight : pad[1], paddingUnit);
    padBottom = checkAndFixUnit(paddingBottom !== undefined ? paddingBottom : pad[2], paddingUnit);
    padLeft = checkAndFixUnit(paddingLeft !== undefined ? paddingLeft : pad[3], paddingUnit);
  }
  return `${padTop} ${padRight} ${padBottom} ${padLeft}`;
};
