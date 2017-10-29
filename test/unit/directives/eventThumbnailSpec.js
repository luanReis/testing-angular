'use strict';

describe('eventThumbnail', function() {

	var el;

	beforeEach(module('eventsApp'));
	beforeEach(module('partials/directives/eventThumbnail.html'));

	beforeEach(inject(function($injector) {
		var $compile = $injector.get('$compile');
		var scope = $injector.get('$rootScope').$new();
		scope.event = {
			id: 1,
			name: 'Rails Girls',
			date: '1/1/2020',
			time: '12:00',
			location: {
				address: 'via foo, 123',
				city: 'IT'
			}
		};

		el = angular.element('<event-thumbnail event="event" />');

		$compile(el)(scope);
		scope.$digest();
		console.log('Element HTML template: ', el[0].outerHTML);

	}));

	it('should bind the conference name', function() {
		expect(el.text()).to.contain('Rails Girls');
	});
});

