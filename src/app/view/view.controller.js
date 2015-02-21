'use strict';

angular.module('DNAViewer')
	.controller('ViewCtrl',
		['$scope', 'DNAViewerService', '$routeParams',
		function ($scope, DNAViewerService, $routeParams) {

			$scope.dna = null;
			$scope.id = $routeParams.id;
			$scope.error = null;
			$scope.selectedFeatureMarker = null;
			$scope.selectedFeature = null;
			$scope.closePopup = false;

			// Retrieve the DNA information by calling the DNAViewer Service with the DNA ID
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

			// Convert strand number (1 or -1) to strings ('forward', 'backword', 'unknown')
			$scope.getStrandText = function (num) {
				if (num == 1) {
					return 'Forward';
				}
				else if (num == -1) {
					return 'Backword';
				}
				else {
					return 'Unknown';
				}
			}

			// When user clicks on a feature in the DNA diagram, update corresponding variables
			$scope.featureDiagramClick = function(event, feature, marker) {
				$scope.selectedFeature = feature;
				$scope.selectedFeatureMarker = marker;
				$scope.closePopup = false;
				$scope.$apply();
			};


			// When user clicks on a feature in the DNA table, update corresponding variables
			$scope.featureTableClick = function(feature) {
				$scope.selectedFeature = feature;
				$scope.closePopup = false;
				$scope.$apply();
			};

			$scope.getDNA();

	}]);
