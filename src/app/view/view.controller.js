'use strict';

angular.module('DNAViewer')
	.controller('ViewCtrl',
		['$scope', 'DNAViewerService', '$routeParams',
		function ($scope, DNAViewerService, $routeParams) {

			$scope.dna = null;
			$scope.id = $routeParams.id;
			$scope.error = null;
			$scope.selectedFeature = null;
			$scope.showDNAModal = false;

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

			// Select a feature
			$scope.selectFeature = function (feature) {
				$scope.selectedFeature = feature;
			}

			// Unselect a feature
			$scope.unselectFeature = function (feature) {
				$scope.selectedFeature = false;
			}

			// Check whether a feature is currenly selected
			$scope.isFeatureSelected = function (feature) {
				if ($scope.selectedFeature && $scope.selectedFeature.dnafeatureId == feature.dnafeatureId) {
					return true;
				}
				else {
					return false;
				}
			}

			// Toggle feature selection
			$scope.toggleFeatureSelection = function (feature) {
				if ($scope.isFeatureSelected(feature)) {
					$scope.unselectFeature(feature);
				}
				else {
					$scope.selectFeature(feature);
				}
			}

			// When user clicks on a feature in the DNA diagram, update corresponding variables
			$scope.featureDiagramClick = function(feature) {
				// $scope.selectedFeature = feature;
				$scope.toggleFeatureSelection(feature);
				$scope.$apply();
			};

			// Show the DNA details modal
			$scope.showModal = function () {
				$scope.showDNAModal = true;
			}

			// Hide the DNA details modal
			$scope.hideModal = function () {
				$scope.showDNAModal = false;
			}

			// To display very long DNA sequences, we need to wrap them into multiple lines
			$scope.wrapDNASequence = function (sequence, lengthPerLine) {
				if (!sequence) {
					return '';
				}
				lengthPerLine = lengthPerLine ? lengthPerLine : 50;
				var result = '';
				for (var i = 0; i < sequence.length; i++) {
					if (i > 0 && i % lengthPerLine == 0) {
						result += "\n";
					}
					result += sequence[i];
				}
				return result;
			}

			$scope.getDNA();

	}]);
