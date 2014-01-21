'user strict';

eventsApp.controller('EditProfileController', function EditProfileController($scope, gravatarUrlBuilder, $location, $firebase) {

            var userRef = new Firebase ('https://angulareventreg.firebaseIO.com');
            var auth = new FirebaseSimpleLogin(userRef, function(error, user){

                if(error){
                    console.log(error);
                    console.log(user);
                } else if (user){
                        console.log('Username: ' + user.userName + ', Provider' + user.provider );
                    } else {
                        //user is logged out
                    }
                });


		  	$scope.getGravatarUrl = function(email) {
		  		return gravatarUrlBuilder.buildGravatarUrl(email);
			};

            $scope.cancelEdit = function () {
                $location.url('/events');
            };

            $scope.saveProfile = function (user) {
                //window.alert('Not functional yet....');
                auth.createUser(user.emailAddress, user.password, function(error, user){
                    if (!error){
                        console.log('Username: ' + user.userName + ', Email: ' + user.emailAddress);
                    }
                });

            };


	} // end EditProfileController
);