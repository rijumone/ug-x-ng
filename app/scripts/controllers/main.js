'use strict';

/**
 * @ngdoc function
 * @name ugXNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ugXNgApp
 */
angular.module('ugXNgApp')
  .controller('MainCtrl', ['$scope', '$facebook', '$location', function ($scope, $facebook, $location) {
    $scope.$on('fb.auth.authResponseChange', function() {
 		$scope.status = $facebook.isConnected();
 		if($scope.status) {
 			$location.path('/login');				 
 		}
 	});
 	
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
