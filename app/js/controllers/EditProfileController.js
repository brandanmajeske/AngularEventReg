'user strict';

eventsApp.controller('EditProfileController', function EditProfileController($scope, gravatarUrlBuilder, $location) {

			$scope.user = {	};

		  	$scope.getGravatarUrl = function(email) {
		  		return gravatarUrlBuilder.buildGravatarUrl(email);
			};

            $scope.cancelEdit = function () {
                $location.url('/events');
            };

            $scope.saveProfile = function (user) {
                window.alert('Not functional yet....');
                console.log(user);
            };

            /* $scope.saveEvent = function(event, newEventForm){

                if(newEventForm.$valid) {
                    eventData.save(event);
                    $timeout(function(){
                        $location.url('events');
                    }, 1000);
                }
            };*/

	} // end EditProfileController
);