const withSass = require('@zeit/next-sass');
const withImage = require('next-images');

module.exports = withSass(withImage({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  },
  cssModules: true
}));
