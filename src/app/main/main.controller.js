'use strict';

angular.module('DNAViewer')
	.controller('MainCtrl', function ($http, $scope, $location) {

		$scope.DNAName = null;

		$scope.viewDNA = function(){
			console.log('here');
			$location.path('/view/1234');  // This is a hack. Redirect all request to one place.
		}


	});
