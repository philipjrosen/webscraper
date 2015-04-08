angular.module('app.eventsService', [])

.factory('eventsFactory', ['$http', '$q', function ($http, $q) {
  var events = {};

  events.getEvents = function (url) {

    var deferred = $q.defer();

    $http.get(url)
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
