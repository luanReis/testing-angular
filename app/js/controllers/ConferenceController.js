(function() {
	'use strict';

	angular
		.module('conferenceApp')
	    .controller('ConferenceController', ConferenceController);

	ConferenceController.$inject = ['$scope', 'conferenceData'];

	function ConferenceController($scope, conferenceData) {
		$scope.showConferences = function() {
			$scope.conferences = conferenceData.getAllConferences();
		};
	}

}());