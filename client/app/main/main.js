'use strict';

angular.module('loopboardFrontApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/alo',
        templateUrl: 'app/main/views/main.html',
        controller: 'MainCtrl'
      });
  });
