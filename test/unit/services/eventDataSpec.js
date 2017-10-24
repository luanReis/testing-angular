'use strict';

describe('eventData', function() {

	var $httpBackend, eventData;

	beforeEach(module('eventsApp'));

	beforeEach(inject(function($injector) {
		$httpBackend = $injector.get('$httpBackend');
		eventData = $injector.get('eventData');
	}));

	function toJson(list) {
		return list.map(function(x) { return x.toJSON() });
	}

	it('should return all events available', function() {
		var mockEvents = [
			{name: 'some event'},
			{name: 'another event'}
		];

		$httpBackend.when('GET', 'data/events.json').respond(mockEvents);

		var events = eventData.getAllEvents();
		$httpBackend.flush();

		expect(toJson(events)).toEqual(mockEvents);

		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
});
