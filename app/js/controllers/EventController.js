'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData){

	$scope.boolValue = true;
	$scope.mystyle = {color:'red'};
	$scope.myclass = 'red';
	$scope.alternate = 'alternate';
	$scope.buttonDisabled = true;


	$scope.sortorder = 'name';
	$scope.event = eventData.event;
	

	

	$scope.upVoteSession = function(session) {
		session.upVoteCount++;
	}

	$scope.downVoteSession = function(session){
		session.upVoteCount--;
	}
});