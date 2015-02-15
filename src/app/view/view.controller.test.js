'use strict';

describe('ViewCtrl', function(){

	var scope;
	var createCtrl;
	var mockDNAViewerService = {};

	beforeEach(module('DNAViewer'));

	beforeEach(module(function ($provide) {
		$provide.value('DNAViewerService', mockDNAViewerService);
	}));

	beforeEach(inject(function($rootScope, $controller, $q) {

		mockDNAViewerService.getDNAbyID = function() {
			return $q.when('<DNA Data>');
		}

		scope = $rootScope.$new();
		createCtrl = function() {
			$controller('ViewCtrl', {$scope: scope});
		};
	}));

	describe('.constructor', function() {

		it('can be created', function() {
			expect(createCtrl).to.not.throw();
		});

	});

	describe('Data initialization', function() {

		beforeEach(function(){
			createCtrl();
		});

		it('dna should be null', function() {
			expect(scope.dna).to.be.null;
		});

		it('error should be null', function() {
			expect(scope.error).to.be.null;
		});

	});

	describe('#getDNA', function() {

		describe('success', function() {

			beforeEach(function(){
				createCtrl();
				scope.getDNA();
				scope.$apply();
			});

			it('get the correct DNA data', function() {
				expect(scope.dna).to.equal('<DNA Data>');
			});

			it('display no error', function() {
				expect(scope.error).to.be.null;
			});

		});

		describe('error', function() {

			beforeEach(inject(function($q){
				mockDNAViewerService.getDNAbyID = function() {
					return $q.reject('error');
				}
				createCtrl();
				scope.getDNA();
				scope.$apply();
			}));

			it('display error', function() {
				expect(scope.error).to.contain('err');
			});

			it('does not update dna data', function() {
				expect(scope.dna).to.be.null;
			});

		});

	});

});
