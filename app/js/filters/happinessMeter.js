(function() {
	'use strict';

	angular
		.module('conferenceApp')
		.filter('happinessMeter', happinessMeter);

	function happinessMeter() {
		return function(language) {
			switch(language) {
				case 'ruby':
					return 'Nice';
				case 'python':
					return 'Awesome!';
				case 'javascript':
					return '...';
				case 'java':
					return 'Great';
			}
		};
	}

}());