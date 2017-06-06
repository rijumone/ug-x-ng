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
  'ngFacebook',
    // 'oauth'
    ])
 .config(function ($routeProvider,$locationProvider,ezfbProvider,$facebookProvider) {
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
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .otherwise({
    redirectTo: '/'
  });
  $locationProvider.hashPrefix('');
    // $locationProvider.html5mode(true).hashPrefix('!');
    /*ezfbProvider.setInitParams({
      // This is my FB app id for plunker demo app
      appId: '386469651480295',

      // Module default is `v2.6`.
      // If you want to use Facebook platform `v2.3`, you'll have to add the following parameter.
      // https://developers.facebook.com/docs/javascript/reference/FB.init
      version: 'v2.3'
    });*/  
    $facebookProvider.setAppId('571841429643733').setPermissions(['email','user_friends']);
  }).run(['$rootScope', '$window', function($rootScope, $window) {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    $rootScope.$on('fb.load', function() {
      $window.dispatchEvent(new Event('fb.load'));
    });
  }]);
