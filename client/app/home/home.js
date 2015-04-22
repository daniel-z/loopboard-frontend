'use strict';

angular.module('loopboardFrontApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('template.home', {
        url: '/home',
        templateUrl: 'app/home/views/home.html',
        controller: 'HomeCtrl'
      });
  });
