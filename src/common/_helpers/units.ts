import isNumber from 'lodash/isNumber';
import toNumber from 'lodash/toNumber';
import isNaN from 'lodash/isNaN';

const UNITS = ['cm', 'mm', 'in', 'px', 'pt', 'pc', 'em', 'ex', 'ch', 'rem', 'vw', 'vh', 'vmin', 'vmax', '%'];

/**
 * SPLIT VALUE AND UNIT
 * ----------------------------------------------------------------------------------
 * CASE:
 * Get string and slip value from unit. Return object with "value" and "unit"
 * ----------------------------------------------------------------------------------
 */
const splitValueUnit = (item: string) => {
  let n;
  const sub = item.length - 1;

  for (sub; sub > 0; sub) {
    n = toNumber(item[sub]);
    if (!isNaN(n) && isNumber(n)) break;
  }

  const value = item.substring(0, sub + 1);
  const unit = item.substring(sub + 1, item.length);

  return {
    unit,
    value,
  };
};

/**
 * VALIDATE UNIT
 * ----------------------------------------------------------------------------------
 * CASE:
 * Check if unit of item is valid and return TRUE/FALSE
 * ----------------------------------------------------------------------------------
 */
export const validateUnit = (item: string) => {
  const { unit } = splitValueUnit(item);

  return UNITS.includes(unit);
};

/**
 * CHECK UNIT
 */
export const checkAndFixUnit = (item: string | number, defaultUnit: string) => {
  if (isNumber(item)) return `${item}${defaultUnit}`;
  return item;
};