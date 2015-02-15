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

	describe('#viewDNA', function() {

		var $loc;

		beforeEach(inject(function($location) {
			$loc = $location;
			createCtrl();
		}));

		it('should redirect to the correct location', function() {
			scope.viewDNA();
			expect($loc.path()).to.equal('/view/1234');  // This is a temporary hack
		});

	});


});
