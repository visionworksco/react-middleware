module.exports = {
  '*.{css,scss,less}': 'stylelint --fix --allow-empty-input',
  '*.{js,jsx,ts,tsx}': 'eslint --fix',
  '*': 'prettier --write',
};
