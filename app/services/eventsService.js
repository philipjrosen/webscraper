angular.module('app.eventsService', [])

.factory('eventsFactory', ['$http', '$q', function ($http, $q) {
  var events = {};

  events.getEvents = function (eventUrl) {
    var deferred = $q.defer();

    $http({method: "GET", url: '/events', params: {eventUrl: eventUrl}})
      .success(function (data, status) {
        deferred.resolve(data);
      })
      .error(function (error, status) {
        console.log("error", status);
        deferred.reject();
      });

    return deferred.promise;
  };

  return events;
}]);
