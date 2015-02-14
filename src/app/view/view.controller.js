'use strict';

angular.module('DNAViewer')
	.controller('ViewCtrl',
		['$scope', 'DNAViewerService', '$routeParams',
		function ($scope, DNAViewerService, $routeParams) {

			$scope.dna = null;
			$scope.id = $routeParams.id;

			DNAViewerService.getDNAbyID($scope.id)
			.then(function(data) {
				console.log(data);
				$scope.dna = data;
			});

	}]);
