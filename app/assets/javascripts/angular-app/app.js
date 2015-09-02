angular.module('app', ['templates', 'ngRoute', 'ui.slider','chart.js']).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            });
        $locationProvider.html5Mode(true);
    });

// this.app.config([
//   '$httpProvider', function($httpProvider) {
//     return $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
//   }
// ]);

// this.app.run(function() {
//   return console.log('angular app running');
// });