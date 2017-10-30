'use strict';

describe('conferenceThumbnail', function() {

	var el;

	beforeEach(module('conferenceApp'));
	beforeEach(module('partials/directives/conferenceThumbnail.html'));

	beforeEach(inject(function($injector) {
		var $compile = $injector.get('$compile');
		var scope = $injector.get('$rootScope').$new();
		scope.conference = {
			id: 1,
			name: 'Rails Girls',
			date: '1/1/2020',
			time: '12:00',
			address: 'via foo, 123'
		};

		el = angular.element('<conference-thumbnail conference="conference" />');

		$compile(el)(scope);
		scope.$digest();
		console.log('Element HTML template: ', el[0].outerHTML);

	}));

	it('should bind the conference name', function() {
		expect(el.text()).to.contain('Title: Rails Girls');
	});

	it('should bind the conference address', function() {
		expect(el.text()).to.contain('Address: via foo, 123');
	});
});

