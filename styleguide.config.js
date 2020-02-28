const path = require('path');

module.exports = {
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true,
      moduleImport: false,
    },
  },
  components: 'src/common/**/*.tsx',
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/_styleguide/Wrapper'),
  },
  template: {
    head: {
      links: [{
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        rel: 'stylesheet',
      },
      {
        href: 'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap',
        rel: 'stylesheet',
      }],
    },
  },
  theme: {
    fontFamily: {
      base: '"Roboto", sans-serif',
    },
  },
};
