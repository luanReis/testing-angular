(function() {
	'use strict';

	angular
		.module('conferenceApp')
		.directive('conferenceThumbnail', conferenceThumbnail);

	function conferenceThumbnail() {
		return {
			restrict: 'E',
	        replace: true,
	        templateUrl: 'partials/directives/conferenceThumbnail.html',
	        scope: {
	            conference: '='
	        }
		};
	}
}());