'use strict';

angular.module('loopboardFrontApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('template.project', {
        url: '/projects',
        templateUrl: 'app/projects/views/projects.html',
        controller: 'ProjectsCtrl'
      });
  });
