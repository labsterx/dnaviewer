'use strict';

angular.module('DNAViewer')
	.factory('DNAViewerService',
		['$http', '$q',
		function ($http, $q) {

			return {

				// Given an ID, return a promise for the
				getDNAbyID: function(id){
					var defer = $q.defer();

					// Note: this is a hack. We always get data from the same json file.
					$http.get('/assets/fixtures/dnamolecule.json')
						.success(function(data) {
							defer.resolve(data);
						})
						.error(function(data, status, headers) {
							defer.reject('Error in getting DNA data for ' + id);
						});

					return defer.promise;
				}


			};

	}]);
