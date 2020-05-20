module.exports = function () {
  return {
    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    files: [
      './package.json',
      'src/katas/**/*.js',
      '!src/katas/**/*.test.js'
    ],

    tests: [
      'src/katas/**/*.test.js'
    ],

    setup: (w) => {
      w.testFramework.configure(require('./package.json').jest);
    }
  };
};
