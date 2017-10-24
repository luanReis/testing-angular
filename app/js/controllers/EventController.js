(function() {
	'use strict';

	angular
		.module('eventsApp')
	    .controller('EventController', EventController);

	EventController.$inject = ['$scope', 'eventData'];

	function EventController($scope, eventData) {
		$scope.events = eventData.getAllEvents();
	}

}());