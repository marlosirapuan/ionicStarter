(function () {
  'use strict';

  angular
    .module('starter')
    .config(routeSetup, routeSetup);

  routeSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

  /////////////////////

  function routeSetup($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'LoginController'
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })
      .state('app.browse.home', {
        url: '/home',
        views: {
          'tabHomeContent': {
            templateUrl: 'templates/browse/home.html'
          }
        }
      })
      .state('app.browse.about', {
        url: '/about',
        views: {
          'tabAboutContent': {
            templateUrl: 'templates/browse/about.html'
          }
        }
      })
      .state('app.browse.settings', {
        url: '/settings',
        views: {
          'tabSettingsContent': {
            templateUrl: 'templates/browse/settings.html'
          }
        }
      })
      ////////

      .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlists.html',
            controller: 'PlayListsController'
          }
        }
      })

      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistController'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/search');
  }

})();

