angular.module('app.eventsService', [])

.factory('eventsFactory', ['$http', '$q', function ($http, $q) {
  var events = {};

  events.getEvents = function (url) {

    $http.get(url)

    .success(function (data, status) {
      console.log(data);
    })
    .error(function (error, status) {
      console.log("error", status);
    });
  };

  return events;
}]);
