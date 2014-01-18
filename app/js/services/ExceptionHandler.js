'use strict';

eventsApp.factory('$exceptionHandler', function(){
	return function(exception) {
		console.log("exeption handled: " + exception.message);
	};
});