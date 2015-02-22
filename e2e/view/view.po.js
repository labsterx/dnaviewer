/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var ViewPage = function() {

	this.testURL = 'http://localhost:3000/#/view/1234';
	this.dnaName = 'GE6 CRISPR Vector- U6';

	this.breadcrumb = element(by.className('breadcrumb'));
	this.errorDiv = element(by.id('viewer-error'));
	this.diagramDiv = element(by.className('diagram'));
	this.tableDiv = element(by.className('feature-table'));
	this.modalDiv = element(by.className('dna-modal'));
	this.modalCloseBtn = element(by.className('modal-close'));

	this.tableCheckboxes = element.all(by.className('table-select'));
	this.selectedFeatureRows = element.all(by.className('selected-feature-row'));
	this.viewSequenceBtns = element.all(by.className('view-seq-btn'));

};

module.exports = new ViewPage();

