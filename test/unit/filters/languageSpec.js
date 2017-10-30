'use strict';

describe('language', function() {
	
	var languageFilter;

	beforeEach(module('conferenceApp'));

	beforeEach(inject(function($injector) {
		languageFilter = $injector.get('languageFilter');
	}));

	it('should return nice when given ruby', function() {
		expect(languageFilter('ruby')).to.equal('Nice');
	});

	it('should return awesome when given python', function() {
		expect(languageFilter('python')).to.equal('Awesome!');
	});

	it('should return ... when given javascript', function() {
		expect(languageFilter('javascript')).to.equal('...');
	});

	it('should return great when given java', function() {
		expect(languageFilter('java')).to.equal('Great');
	});
});