'use strict';

angular.module('DNAViewer', ['ngSanitize', 'ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/main/index.html',
				controller: 'MainCtrl'
			})
			.when('/view/:DNAId', {
				templateUrl: 'app/view/index.html',
				controller: 'ViewCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	})
;
