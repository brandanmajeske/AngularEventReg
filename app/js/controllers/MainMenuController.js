'use strict';

eventsApp.controller('MainMenuController',
function MainMenuController($scope, $location){

    $scope.goHome = function(){

        $location.url('events');
    }

    $scope.createEvent = function(){
        $location.url('newevent');

    };



});