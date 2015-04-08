angular.module('app')
.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/events/list');

  $stateProvider
    .state('events', {
      url: '/events',
      templateUrl: 'app/components/events/eventsView.html',
      controller: 'EventsCtrl'
    })

    $stateProvider
    .state('events.list', {
      url: '/list',
      templateUrl: 'app/components/events/listView.html',
      controller: 'EventsCtrl'
    })

    $stateProvider
    .state('events.grid', {
      url: '/grid',
      templateUrl: 'app/components/events/gridView.html',
      controller: 'EventsCtrl'
    });
});
