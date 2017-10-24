'use strict';

describe('EventController', function() {

	var $controller, scope, mockEventData;

	beforeEach(module('eventsApp'));

	beforeEach(inject(function($injector) {
		$controller = $injector.get('$controller');
		scope = $injector.get('$rootScope').$new();
		mockEventData = sinon.stub({getAllEvents: function() {}});
	}));

	it('should set a name to the scope', function() {
		var mockEvents = [
			{name: 'event1'},
			{name: 'event2'}
		];
		mockEventData.getAllEvents.returns(mockEvents);

		$controller('EventController', {
			$scope: scope,
			eventData: mockEventData
		});

		expect(scope.events).toBe(mockEvents);
	});
});