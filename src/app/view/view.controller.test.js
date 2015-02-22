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

	describe('#getStrandText', function() {

		beforeEach(function(){
			createCtrl();
		});

		it('return "Forward" for 1', function() {
			expect(scope.getStrandText(1)).to.equal('Forward');
		});

		it('return "Backword" for -1', function() {
			expect(scope.getStrandText(-1)).to.equal('Backword');
		});

		it('return "Unknown" for invalid inputs', function() {
			expect(scope.getStrandText(8)).to.equal('Unknown');
		});

	});

	describe('#isFeatureSelected', function() {

		var testFeature = {
			dnafeatureId: 123
		};

		var testFeature_1 = {
			dnafeatureId: 345
		}

		beforeEach(function(){
			createCtrl();
		});

		describe('When there is no selected feature', function() {

			beforeEach(function(){
				scope.selectedFeature = null;
			});

			it('should return false', function() {
				expect(scope.isFeatureSelected(testFeature)).to.equal(false);
			});

		});

		describe('When the selected feature is the given feature', function() {

			beforeEach(function(){
				scope.selectedFeature = testFeature_1;
			});

			it('should return false', function() {
				expect(scope.isFeatureSelected(testFeature)).to.equal(false);
			});

		});

	});

	describe('#wrapDNASequence', function() {

		var seq_10 = 'CTGTGCCTTC';
		var seq_50 = 'CTGTGCCTTCTAGTTGCCAGCCATCTGTTGTTTGCCCCTCCCCCGTGCCTTC';
		var seq_50_20 =
			"CTGTGCCTTCTAGTTGCCAG\n" +
			"CCATCTGTTGTTTGCCCCTC\n" +
			"CCCCGTGCCTTC";
		var seq_200 = 'CTGTGCCTTCTAGTTGCCAGCCATCTGTTGTTTGCCCCTCCCCCGTGCCTTCCTTGACCCTGGAAGGTGCCACTCCCACTGTCCTTTCCTAATAAAATGAGGAAATTGCATCGCATTGTCTGAGTAGGTGTCATTCTATTCTGGGGGGTGGGGTGGGGCAGGACAGCAAGGGGGAGGATTGGGAAGACAATAGCAGGCAT';
		var seq_200_50 =
			"CTGTGCCTTCTAGTTGCCAGCCATCTGTTGTTTGCCCCTCCCCCGTGCCT\n" +
			"TCCTTGACCCTGGAAGGTGCCACTCCCACTGTCCTTTCCTAATAAAATGA\n" +
			"GGAAATTGCATCGCATTGTCTGAGTAGGTGTCATTCTATTCTGGGGGGTG\n" +
			"GGGTGGGGCAGGACAGCAAGGGGGAGGATTGGGAAGACAATAGCAGGCAT";

		beforeEach(function(){
			createCtrl();
		});

		it('should have a default lengthPerLine that is 50', function() {
			expect(scope.wrapDNASequence(seq_200)).to.equal(seq_200_50);
		});

		it('should not change short sequences', function() {
			expect(scope.wrapDNASequence(seq_10, 20)).to.equal(seq_10);
		});

		it('should not add line breaks to sequences longer than thredhold', function() {
			expect(scope.wrapDNASequence(seq_50, 20)).to.equal(seq_50_20);
			expect(scope.wrapDNASequence(seq_200, 50)).to.equal(seq_200_50);
		});

	});


});
