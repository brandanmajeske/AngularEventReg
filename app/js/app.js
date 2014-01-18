'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize','ngResource', 'ngCookies', 'ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider.when('/newevent',{
            templateUrl:'templates/newevent.html',
            controller: 'EditEventController'
        });
        $routeProvider.when('/eventdetails',{
            templateUrl: 'templates/eventdetails.html',
            controller: 'EventController'
            });
        $routeProvider.when('/events',{
            templateUrl:'templates/eventlist.html',
            controller: 'EventListController'
        });
        $routeProvider.when('/event/:eventId', {

            templateUrl: 'templates/eventdetails.html',
            controller: 'EventController',
            resolve: {
                event: function($q, $route, eventData){

                    var deferred = $q.defer();

                    eventData.getEvent($route.current.pathParams.eventId)
                        .then(function(event){ deferred.resolve(event);});
                       return deferred.promise;
                }
            }
        });

        $routeProvider.otherwise({redirectTo: '/events'});

        //$locationProvider.html5Mode(true);
    });

