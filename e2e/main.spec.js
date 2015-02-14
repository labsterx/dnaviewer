'use strict';

describe('Feature: Main Page', function() {

	var page = require('./main.po');

	describe('The default view', function() {

		before(function() {
			browser.get('http://localhost:3000/#/');
		});

		it('the page should load successfully', function() {

		});

	});

});


