angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/events');

  $stateProvider
    .state('events', {
      url: '/events',
      templateUrl: 'app/components/events/eventsView.html',
      controller: 'EventsCtrl'
    });
});