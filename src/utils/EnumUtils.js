/*
  { Up: 'Up', Down: 'Down', Left: 'Left', Right: 'Right' }
  createEnum(['Up', 'Down', 'Left', 'Right']);
*/
const createEnum = (values) => {
  const enumObject = {};
  for (const val of values) {
    enumObject[val] = val;
  }
  return Object.freeze(enumObject);
};

export const EnumUtils = {
  createEnum,
};
