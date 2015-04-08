angular.module('app.eventsService', [])

.factory('eventsFactory', ['$http', '$q', function ($http, $q) {
  var events = {};
  var data = [
    {
      description : "Geophysics Defense: Xukai Shen",
      time: "Wednesday, October 1, 2014. 11:00 AM.",
      location: "Hartley"
    },
    {
      description: "Spotlight on Art",
      time: "Ongoing from October 1, 2014 through May 6, 2015.  See details for exact dates and times.",
      location: "Cantor Arts Center (meet in Main Lobby) "
    },
    {
      description: "Sunaina Maira: 'More Delicate Than a Flower, Yet Harder Than a Rock': Youth Activism and Human Rights",
      time: "Wednesday, October 1, 2014. 12:00 PM.",
      location: "Encina Hall West, Room 208"
    }
  ];

  events.getEvents = function () {
    return data;
  };
  
  return events;
}]);