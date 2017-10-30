(function() {
	'use strict';

	angular
		.module('conferenceApp')
		.factory('conferenceData', ['$resource', conferenceData]);

	conferenceData.$inject = ['$resource'];

	function conferenceData($resource) {
		var Conference = $resource('data/conferences.json');

		var getAllConferences = function() {
			return Conference.query();
		}

		return {
			getAllConferences: getAllConferences
		};
	}

}());
