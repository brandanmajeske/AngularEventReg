'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData, $routeParams, $route, $cookieStore  ){

	$scope.alternate = 'alternate';
    $scope.sortorder = 'name';

    $scope.event = $route.current.locals.event;

    /*	eventData.getEvent($routeParams.eventId).then(function(event) {
            $scope.event = event;
        });*/



        $scope.upVoteSession = function(session, event) {

            var sessionName = session.name;


            if(typeof $cookieStore.get('upVote-'+sessionName) === 'undefined'){

            session.upVoteCount++;
            eventData.saveVote(event);



            $cookieStore.put('upVote-'+sessionName, session.upVoteCount);

            } else {
                //change this to appropriate message
                window.alert('Sorry! You\'ve already voted.');

            }
        }

        $scope.downVoteSession = function(session, event){

            var sessionName = session.name;


            if(typeof $cookieStore.get('downVote-'+sessionName) === 'undefined'){
                session.upVoteCount--;

                $cookieStore.put('downVote-'+sessionName, session.upVoteCount);
                eventData.saveVote(event);

            } else {
                //change this to appropriate message
                window.alert('Sorry! You\'ve already voted.');
            }
        }


});