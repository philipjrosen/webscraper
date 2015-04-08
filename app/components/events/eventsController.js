angular.module('app.events', [])

.controller('EventsCtrl', ['$scope','eventsFactory', function ($scope, eventsFactory) {
  eventsFactory.getEvents('/events')
  .then(function (events) {
    $scope.events = events;
  });
}]);
