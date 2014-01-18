'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData, $routeParams, $route  ){

	$scope.alternate = 'alternate';
    $scope.sortorder = 'name';

    $scope.event = $route.current.locals.event;

    /*	eventData.getEvent($routeParams.eventId).then(function(event) {
            $scope.event = event;
        });*/

	$scope.upVoteSession = function(session, event) {
		session.upVoteCount++;
	}

	$scope.downVoteSession = function(session){
		session.upVoteCount--;
	}

});