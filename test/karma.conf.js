module.exports = function(config) {
  config.set({

    basePath: '../app',

    frameworks: ['mocha', 'chai'],

    files: [
      '../node_modules/angular/angular.js',
      '../node_modules/angular-resource/angular-resource.js',
      '../node_modules/angular-route/angular-route.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      '../node_modules/sinon/pkg/sinon.js',
      'js/**/*.js',
      'partials/**/*.html',
      '../test/unit/**/*.js'
    ],

    preprocessors: {
      '**/*.html': 'ng-html2js'
    },

    autoWatch: true,

    browsers: ['Chrome'],

    plugins: [
        'karma-mocha',
        'karma-chai',
        'karma-chrome-launcher',
        'karma-ng-html2js-preprocessor'
    ]

  })
}
