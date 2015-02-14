'use strict';

describe('MainCtrl', function(){

	var scope;
	var createCtrl;

	beforeEach(module('DNAViewer'));

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		createCtrl = function() {
			$controller('MainCtrl', {$scope: scope});
		};
	}));


	describe('.constructor', function() {

		it('can be created', function() {
			expect(createCtrl).to.not.throw();
		});

	});


});
