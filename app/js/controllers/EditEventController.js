'use strict';

eventsApp.controller('EditEventController',
	function EditEventController($scope, eventData, $location, $timeout){

        $scope.multiSessions = false;
		$scope.saveEvent = function(event, newEventForm){

			if(newEventForm.$valid) {
              eventData.save(event);
              $timeout(function(){
                  $location.url('events');
              }, 1000);
			}
		};

		$scope.cancelEdit = function(){
			$location.url('/events');
		};

		$scope.date = Math.round(new Date().getTime());
        $scope.price = '';
		$scope.validDate = false;


		$scope.event = {
			name: 'New Event',
			date: $scope.date,
            time: {
                start: '',
                end: ''
                },
			location: {
				address: '',
				city: '',
				state: ''
			},
			price: $scope.price,
			imageUrl: '',
            sessions:[{
                id: 1,
                creatorName: '',
                name: '',
                duration:'',
                level:'',
                abstract:'',
                upVoteCount: 0
            }]
            };

        $scope.addSession = function(){
            $scope.multiSessions = true;
            $scope.event.sessions.push({
                id: $scope.event.sessions.length + 1,
                creatorName: '',
                name: '',
                duration: 1,
                level:'',
                abstract:'',
                upVoteCount: 0
            });
        };

        $scope.removeSession = function(session){
            for (var i = 0, ii = $scope.event.sessions.length; i < ii; i++){
                if (session === $scope.event.sessions[i]){
                    $scope.event.sessions.splice(i, 1);
                }
            }
        };


		$scope.isFuture = function (date, newEventForm) {
			
			var today = Math.round(new Date().getTime());
			var newDate = new Date(date).getTime();
			if(newDate > today) {
				return true;
			} else {
               $scope.newEventForm.$invalid = true;
               return false;
			}
		};		


	
	} // end EditEventController
);

