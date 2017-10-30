'use strict';

describe('happinessMeter', function() {
	
	var happinessMeterFilter;

	beforeEach(module('conferenceApp'));

	beforeEach(inject(function($injector) {
		happinessMeterFilter = $injector.get('happinessMeterFilter');
	}));

	it('should return nice when given ruby', function() {
		expect(happinessMeterFilter('ruby')).to.equal('Nice');
	});

	it('should return awesome when given python', function() {
		expect(happinessMeterFilter('python')).to.equal('Awesome!');
	});

	it('should return ... when given javascript', function() {
		expect(happinessMeterFilter('javascript')).to.equal('...');
	});

	it('should return great when given java', function() {
		expect(happinessMeterFilter('java')).to.equal('Great');
	});
});