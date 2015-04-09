angular.module('app.events', [])

.controller('EventsCtrl', ['$scope','eventsFactory', function ($scope, eventsFactory) {


  $scope.getEventsFromUrl = function(url) {
    eventsFactory.getEvents(url)
    .then(function (events) {
      $scope.events = events;
    });
  };

  $scope.getUrl = function () {
    $scope.getEventsFromUrl($scope.url);
    $scope.url = "";
  };
}]);
