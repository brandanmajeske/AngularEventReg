'use strict';

eventsApp.controller('EditEventController',
	function EditEventController($scope, eventData, $location, $timeout){


		$scope.saveEvent = function(event, newEventForm){

			if(newEventForm.$valid) {
                console.log(event);
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
            for (var i = 0, ii = event.sessions.length; i < ii; i++){
                if (session === event.sessions[i]){
                    $scope.event.sessions.splice(i, 1);
                }
            }
        };

		$scope.isFuture = function (date) {
			
			var today = Math.round(new Date().getTime());
			var newDate = new Date(date).getTime();
			if(newDate > today) {
				return true;
			} else {
				//event.date.$setValidity('invalid', true);
				return false;
			}

		};		

		/*$scope.isFuture = function (date) {
			
			var today = Math.round(new Date().getTime());
			var newDate = new Date(date).getTime();
			if(newDate > today) {
				$scope.validDate = true;
				return $scope.validDate;
			} else {
				$scope.validDate = false;
			}
			$scope.date = newDate;
			return $scope.date;
		};*/
	
	} // end EditEventController
);

