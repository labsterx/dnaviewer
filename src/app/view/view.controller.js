'use strict';

angular.module('DNAViewer')
	.controller('ViewCtrl',
		['$scope', 'DNAViewerService', '$routeParams',
		function ($scope, DNAViewerService, $routeParams) {

			$scope.dna = null;
			$scope.id = $routeParams.id;
			$scope.error = null;

			$scope.getDNA = function() {
				DNAViewerService.getDNAbyID($scope.id)
				.then(function(data) {
					console.log(data);
					$scope.dna = data;
				},
				function(err) {
					$scope.error = "Sorry, error in getting DNA data: " + err;
				});
			};

			$scope.getDNA();

	}]);
