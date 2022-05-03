module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-recommended', 'stylelint-config-prettier'],
  rules: {
    'selector-class-pattern': null,
    'max-nesting-depth': null,
    'selector-max-compound-selectors': null,
    'no-descending-specificity': null,
  },
};
