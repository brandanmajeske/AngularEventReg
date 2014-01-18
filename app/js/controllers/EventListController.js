'use strict';

eventsApp.controller('EventListController',
    function EventListController($scope, $location, $timeout, eventData){

                $scope.events = eventData.getAllEvents();

    });