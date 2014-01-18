eventsApp.factory('eventData', function($http, $q, $resource, $timeout, $parse){
	var resource = $resource('/data/event/:id', {id:'@id'}/*,{"getAll": {method: "GET", isArray: true, params: {something: 'foo'}}}*/);

	return {
		getEvent: function(eventId) {

			//return $resource('/data/event/:id', {id:'@id'}).get({id:1});
		
		var deferred = $q.defer();	

            resource.get({id: eventId},
			function(event){
				deferred.resolve(event);
			},
			function(response){
				deferred.reject(response);
			});

		return deferred.promise;

		},

		save: function(event) {
			event.id = 999;
			var deferred = $q.defer();
			resource.save(event,
				function(response) {deferred.resolve(response);},
				function(response) {deferred.reject(response);}
			);
			return deferred.promise;
		},
        getAllEvents: function(){

          return resource.query();
        }
    };
});
