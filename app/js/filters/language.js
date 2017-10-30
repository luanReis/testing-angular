(function() {
	'use strict';

	angular
		.module('conferenceApp')
		.filter('language', language);

	function language() {
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