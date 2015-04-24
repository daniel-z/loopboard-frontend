'use strict';

angular.module('loopboardFrontApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('template.projectList', {
        url: '/projects',
        templateUrl: 'app/projects/views/project.list.html',
        controller: 'ProjectsListCtrl'
      })
      .state('template.projectDetail', {
        url: '/projects/:id',
        templateUrl: 'app/projects/views/project.detail.html',
        controller: 'ProjectDetailCtrl'
      });
  });
