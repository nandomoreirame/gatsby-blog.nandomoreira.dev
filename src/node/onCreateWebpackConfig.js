const { resolve } = require('path');
const srcPath = resolve(__dirname, '..', '..', 'src');

module.exports = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': resolve(srcPath, 'components'),
        '@styles': resolve(srcPath, 'styles'),
        '@utils': resolve(srcPath, 'utils'),
      },
      extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    },
  });
};
