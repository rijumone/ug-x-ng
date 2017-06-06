'use strict';

/**
 * @ngdoc function
 * @name ugXNgApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ugXNgApp
 */
 angular.module('ugXNgApp')
 .controller('LoginCtrl', ['$scope', '$facebook', function ($scope, $facebook) {
 	$scope.$on('fb.auth.authResponseChange', function() {
 		$scope.status = $facebook.isConnected();
 		if($scope.status) {
 			$facebook.api('/me').then(function(user) {
 				console.log(user);
 				$scope.user = user;
 			});
 		}
 	});
 	$scope.loginToggle = function() {
 		if($scope.status) {
 			$facebook.logout();
 		} else {
 			$facebook.login();
 		}
 	};

 	this.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];
 }]);
