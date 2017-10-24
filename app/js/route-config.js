(function() {
	'use strict';

	angular
		.module('eventsApp')
		.config(routes);

	routes.$inject = ['$routeProvider'];

	function routes($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'partials/controllers/events.html',
				controller: 'EventController',
				controllerAs: 'vm'
			})
			.otherwise({redirectTo: '/'});
	}

}());