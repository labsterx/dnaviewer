'use strict';

angular.module('DNAViewer')
	.controller('MainCtrl',
		['$scope', '$location',
		function ($scope, $location) {

		$scope.DNAName = null;

		$scope.viewDNA = function() {
			$location.path('/view/1234');  // This is a hack. Redirect all request to one place.
		};


	}]);
