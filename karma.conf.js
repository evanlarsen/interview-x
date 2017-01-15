module.exports = function(config) {
  config.set({

    basePath: '',

    files: [
      'dist/client/bower_components/angular/angular.js',
      'dist/client/bower_components/angular-route/angular-route.js',
      'dist/client/bower_components/angular-mocks/angular-mocks.js',
      'dist/client/**/*.module.js',
      'dist/client/**/*.component.js',
      'src/client/**/*.spec.js'
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
