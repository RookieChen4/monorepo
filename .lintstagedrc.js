module.exports = {
  ignore: ['pnpm-lock.yaml', 'CHANGELOG.md'],
  linters: {
    '*.{js}': ['prettier --write', 'eslint --fix'],
  },
};
