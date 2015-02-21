'use strict';

angular.module('DNAViewer', ['ngSanitize', 'ngRoute', 'angularplasmid'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/main/index.html',
				controller: 'MainCtrl'
			})
			.when('/view/:id', {
				templateUrl: 'app/view/index.html',
				controller: 'ViewCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	})
;
