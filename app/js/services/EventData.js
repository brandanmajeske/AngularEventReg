eventsApp.factory('eventData', function($http, $q, $resource, $timeout, $parse){
	var resource = $resource('/data/event/:id', {id:'@id'});

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

            //get the number of files in the event directory
            //set the event id to a number greater than the number of files found
            event.id = 0;
            var fileCheck, numFiles;

            $timeout(function(){

               fileCheck =
                    $http({
                        method: 'GET',
                        url: '/data/event',
                        isArray: true,
                        success: (function(data, status, headers, config){
                            console.log('success: ');
                            return data;
                        }),
                        error: (function(data, status, headers, config){
                            console.log(status);
                        })
                    });
                return fileCheck;

            },300).then(function(fileCheck){

                numFiles = fileCheck.data.length;
                numFiles += 1;
                event.id = numFiles;

                var deferred = $q.defer();
                resource.save(event,
                     function(response) {deferred.resolve(response);},
                     function(response) {deferred.reject(response);}
                     );
                return deferred.promise;
            });

		},
        saveVote: function(event){


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
