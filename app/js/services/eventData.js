(function() {
	'use strict';

	angular
		.module('eventsApp')
		.factory('eventData', ['$resource', eventData]);

	eventData.$inject = ['$resource'];

	function eventData($resource) {
		var Event = $resource('data/events.json');

		var getAllEvents = function() {
			return Event.query();
		}

		return {
			getAllEvents: getAllEvents
		};
	}

}());
