'use strict';

eventsApp.controller('EditEventController',
	function EditEventController($scope, eventData, $location){


		$scope.saveEvent = function(event, newEventForm){

			if(newEventForm.$valid) {
				eventData.save(event)
				.then(
					function(response) {console.log('success', response)},
					function(response) {console.log('failure', response)}
				);	
			}
		};

		$scope.cancelEdit = function(){
			$location.url('/events');
		};

		$scope.date = Math.round(new Date().getTime());

		$scope.validDate = false;

		$scope.event = {
			name: 'New Event',
			date: $scope.date,
			location: {
				address: '',
				city: '',
				state: ''
			},
			price: 0,
			imageUrl: ''

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

