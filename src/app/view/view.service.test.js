'use strict';

describe('DNAViewerService', function(){

	var service;
	var mockBackend;

	beforeEach(module('DNAViewer'));

	beforeEach(inject(function(DNAViewerService, $httpBackend) {
		service = DNAViewerService;
		mockBackend = $httpBackend;
	}));


	describe('#getDNAbyID: success', function() {

		var result;

		beforeEach(function() {

			// This is a temporary hack. Should be replaced with actual API call later.
			mockBackend.expectGET('/assets/fixtures/dnamolecule.json')
			.respond('<result>');

			service.getDNAbyID(123).then(function(data) {
				result = data;
			});

			mockBackend.flush();

		});

		it('should make an HTTP GET request', function() {
			mockBackend.verifyNoOutstandingExpectation();
			mockBackend.verifyNoOutstandingRequest();
		});

		it('should resolve the correct data', function() {
			expect(result).to.equal('<result>');
		});

	});

	describe('#getDNAbyID: failure', function() {

		var result;
		var error;

		beforeEach(function() {

			// This is a temporary hack. Should be replaced with actual API call later.
			mockBackend.expectGET('/assets/fixtures/dnamolecule.json')
			.respond(404, {msg: 'Not Found'});

			service.getDNAbyID(123).then(function(data) {
				result = data;
			},
			function(err) {
				error = err;
			});

			mockBackend.flush();

		});

		it('should make an HTTP GET request', function() {
			mockBackend.verifyNoOutstandingExpectation();
			mockBackend.verifyNoOutstandingRequest();
		});

		it('should not result any data', function() {
			expect(result).to.be.undefined;
		});

		it('should reject with error', function() {
			expect(error).to.contain('Error');
		});

	});


});
