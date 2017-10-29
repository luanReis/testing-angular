'use strict';

describe('EventController', function() {

	var $controller, scope, mockEventData;

	beforeEach(module('eventsApp'));

	beforeEach(inject(function($injector) {
		$controller = $injector.get('$controller');
		scope = $injector.get('$rootScope').$new();
		mockEventData = sinon.stub({getAllEvents: function() {}});
	}));

	it('should fetch all available conferences', function() {
		var mockEvents = [
			{name: 'conference1'},
			{name: 'conference2'}
		];
		mockEventData.getAllEvents.returns(mockEvents);

		$controller('EventController', {
			$scope: scope,
			eventData: mockEventData
		});

		expect(scope.events).to.equal(mockEvents);
	});
});