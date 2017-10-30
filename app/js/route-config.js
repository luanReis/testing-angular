(function() {
	'use strict';

	angular
		.module('conferenceApp')
		.config(routes);

	routes.$inject = ['$routeProvider'];

	function routes($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'partials/controllers/conferences.html',
				controller: 'ConferenceController',
				controllerAs: 'vm'
			})
			.otherwise({redirectTo: '/'});
	}

}());