'use strict';

eventsApp.controller('FilterSampleController', 
	function FilterSampleController($scope, durationFilter){
	
	$scope.data = {};

	
	$scope.data.duration1 = durationFilter(1);
	$scope.data.duration2 = durationFilter(2);
	$scope.data.duration3 = durationFilter(3);
	$scope.data.duration4 = durationFilter(4);


});