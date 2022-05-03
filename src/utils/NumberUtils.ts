const toFixed = (value: number): string => {
  return value.toFixed(2);
};

const round = (value: number): number => {
  return Math.round(value * 100) / 100;
};

const roundToString = (value: number, decimals: number): string => {
  return (Math.round(value * 100) / 100).toFixed(decimals);
};

export const NumberUtils = {
  round,
  toFixed,
  roundToString,
};
