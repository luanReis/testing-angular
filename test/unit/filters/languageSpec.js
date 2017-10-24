'use strict';

describe('language', function() {
	
	var languageFilter;

	beforeEach(module('eventsApp'));

	beforeEach(inject(function($injector) {
		languageFilter = $injector.get('languageFilter');
	}));

	it('should return nice when given ruby', function() {
		expect(languageFilter('ruby')).toBe('Nice');
	});

	it('should return awesome when given python', function() {
		expect(languageFilter('python')).toBe('Awesome!');
	});

	it('should return ... when given javascript', function() {
		expect(languageFilter('javascript')).toBe('...');
	});

	it('should return great when given java', function() {
		expect(languageFilter('java')).toBe('Great');
	});
});