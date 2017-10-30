'use strict';

describe('conferenceData', function() {

	var $httpBackend, conferenceData;

	beforeEach(module('conferenceApp'));

	beforeEach(inject(function($injector) {
		$httpBackend = $injector.get('$httpBackend');
		conferenceData = $injector.get('conferenceData');
	}));

	function toJson(list) {
		return list.map(function(x) { return x.toJSON() });
	}

	it('should return all conferences available', function() {
		var mockConferences = [
			{name: 'some conference'},
			{name: 'another conference'}
		];

		$httpBackend.when('GET', 'data/conferences.json').respond(mockConferences);

		var conferences = conferenceData.getAllConferences();
		$httpBackend.flush();

		expect(toJson(conferences)).to.deep.equal(mockConferences);

		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
});
