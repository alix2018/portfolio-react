module.exports = () => ({
  plugins: [
    require('postcss-easy-import'),
    require('postcss-preset-env'),
    require('postcss-mixins'),
    require('cssnano'),
    require('postcss-nesting'),
    require('autoprefixer')
  ]
});