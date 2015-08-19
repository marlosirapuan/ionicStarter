(function () {
  'use strict';

  angular
    .module('starter')
    .controller('PlayListsController', PlayListsController)
    .controller('PlaylistController', PlaylistController);

  PlayListsController.$inject = ['$scope'];
  PlaylistController.$inject = ['$scope', '$stateParams'];

  /////////////////////

  function PlayListsController($scope) {
    $scope.playlists = [
      {title: 'Reggae', id: 1},
      {title: 'Chill', id: 2},
      {title: 'Dubstep', id: 3},
      {title: 'Indie', id: 4},
      {title: 'Rap', id: 5},
      {title: 'Cowbell', id: 6}
    ];
  }

  function PlaylistController($scope, $stateParams) {
  }
})();