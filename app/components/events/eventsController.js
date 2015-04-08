angular.module('app.events', [])

.controller('EventsCtrl', ['$scope','eventsFactory', function ($scope, eventsFactory) {

  $scope.url;

  eventsFactory.getEvents('/events')
  .then(function (events) {
    $scope.events = events;
  });

  $scope.getUrl = function () {
    console.log($scope.url);
    $scope.url = "";
  };
}]);
