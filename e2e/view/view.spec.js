'use strict';

describe('Feature: View Page', function() {

	var page = require('./view.po');

	describe('Visit Page', function() {

		before(function() {
			browser.get(page.testURL);
		});

		it('the page should show a breadcrumb', function() {
			expect(page.breadcrumb.getText()).to.eventually.contain(page.dnaName);
		});

		it('the page should not show any error', function() {
			expect(page.errorDiv.isDisplayed()).to.eventually.equal(false);
		});

		it('the page should show a diagram', function() {
			expect(page.diagramDiv.isDisplayed()).to.eventually.equal(true);
		});

		it('the page should show a feature table', function() {
			expect(page.tableDiv.isDisplayed()).to.eventually.equal(true);
		});

		it('the page should not show the modal for sequences', function() {
			expect(page.modalDiv.isDisplayed()).to.eventually.equal(false);
		});

	});

	describe('Interactions', function() {

		before(function() {
			browser.get(page.testURL);
		});

		it('No table row should be selected', function() {
			expect(page.selectedFeatureRows.count()).to.eventually.equal(0);
		});

		it('I click on the first checkbox in the feature table', function() {
			page.tableCheckboxes.first().click();
		});

		it('One table row should be selected', function() {
			expect(page.selectedFeatureRows.count()).to.eventually.equal(1);
		});

		it('The view sequence button in the first row should be visible', function() {
			expect(page.viewSequenceBtns.first().isDisplayed()).to.eventually.equal(true);
		});

		it('I click on the view sequence button for the selected feature', function() {
			page.viewSequenceBtns.first().click();
		});

		it('the page should show the modal for sequences', function() {
			expect(page.modalDiv.isDisplayed()).to.eventually.equal(true);
		});

		it('I click on the close button in the modal', function() {
			page.modalCloseBtn.click();
		});

		it('the modal should be closed', function() {
			expect(page.modalDiv.isDisplayed()).to.eventually.equal(false);
		});

	});

});


