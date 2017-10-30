'use strict';

describe('ConferenceController', function() {

	var $controller, scope, mockConferenceData;

	beforeEach(module('conferenceApp'));

	beforeEach(inject(function($injector) {
		$controller = $injector.get('$controller');
		scope = $injector.get('$rootScope').$new();
		mockConferenceData = sinon.stub({getAllConferences: function() {}});
	}));

	it('should fetch all available conferences', function() {
		var mockConferences = [
			{name: 'conference1'},
			{name: 'conference2'}
		];
		mockConferenceData.getAllConferences.returns(mockConferences);

		$controller('ConferenceController', {
			$scope: scope,
			conferenceData: mockConferenceData
		});

		scope.showConferences();

		expect(scope.conferences).to.equal(mockConferences);
	});
});