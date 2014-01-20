'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData, $routeParams, $route, $cookieStore  ){

	$scope.alternate = 'alternate';
    $scope.sortorder = 'name';

    $scope.event = $route.current.locals.event;

    /*	eventData.getEvent($routeParams.eventId).then(function(event) {
            $scope.event = event;
        });*/

    //$cookieStore.remove('upVote');
    console.log($cookieStore.get('upVote'));


        $scope.upVoteSession = function(session, event) {

            if(typeof $cookieStore.get('upVote') === 'undefined'){

            session.upVoteCount++;
            console.log(session.upVoteCount);
            $cookieStore.put('upVote', session.upVoteCount);
            console.log($cookieStore.get('upVote'));

            } else {
                window.alert('Sorry! You\'ve already voted.');
            }
        }

        $scope.downVoteSession = function(session, event){



            if(typeof $cookieStore.get('downVote') === 'undefined'){
                session.upVoteCount--;
                console.log(event);
                $cookieStore.put('downVote', session.upVoteCount);
                console.log($cookieStore.get('downVote'));

            } else {
                window.alert('Sorry! You\'ve already voted.');
            }
        }




});