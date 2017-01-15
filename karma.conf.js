module.exports = function(config) {
  config.set({

    basePath: '',

    files: [
      'dist/*.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/app/**/*.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ]

  });
};
