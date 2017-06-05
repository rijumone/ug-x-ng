'use strict';

/**
 * @ngdoc overview
 * @name ugXNgApp
 * @description
 * # ugXNgApp
 *
 * Main module of the application.
 */
angular
  .module('ugXNgApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    // 'oauth'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.hashPrefix('');
    // $locationProvider.html5mode(true).hashPrefix('!');
  });
