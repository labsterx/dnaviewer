'use strict';

describe('Feature: Main Page', function() {

	var page = require('./main.po');

	describe('The default view', function() {

		before(function() {
			browser.get('http://localhost:3000/#/');
		});

		it('the page should show a title', function() {
			expect(page.pageTitle.getText()).to.eventually.equal('DNA Viewer');
		});

	});


	describe('Enter DNA to View', function() {

		before(function() {
			browser.get('http://localhost:3000/#/');
		});

		it('I enter a DNA Name', function() {
			page.DNANameInput.sendKeys('Test DNA');
			page.enterBtn.click();
		});

		it('I should be redirected to the view page', function() {
			expect(browser.getCurrentUrl()).to.eventually.contain('/view/');
		});

	});

});


