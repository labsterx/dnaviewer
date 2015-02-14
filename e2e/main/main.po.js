/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
	this.pageTitle = element(by.className('page-title'));
	this.DNANameInput = element(by.id('dna-name-input'));
	this.enterBtn = element(by.id('view-dna-btn'));
};

module.exports = new MainPage();

