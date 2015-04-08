angular.module('app.events', [])

.controller('EventsCtrl', ['$scope','eventsFactory', function ($scope, eventsFactory) {
  $scope.events = eventsFactory.getEvents();
}]);
