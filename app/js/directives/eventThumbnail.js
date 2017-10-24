(function() {
	'use strict';

	angular
		.module('eventsApp')
		.directive('eventThumbnail', eventThumbnail);

	function eventThumbnail() {
		return {
			restrict: 'E',
	        replace: true,
	        templateUrl: 'partials/directives/eventThumbnail.html',
	        scope: {
	            event: '='
	        }
		};
	}
}());