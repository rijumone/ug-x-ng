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
    'ezfb',
    // 'oauth'
  ])
  .config(function ($routeProvider,$locationProvider,ezfbProvider) {
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
    ezfbProvider.setInitParams({
      // This is my FB app id for plunker demo app
      appId: '386469651480295',

      // Module default is `v2.6`.
      // If you want to use Facebook platform `v2.3`, you'll have to add the following parameter.
      // https://developers.facebook.com/docs/javascript/reference/FB.init
      version: 'v2.3'
    });  
  });
