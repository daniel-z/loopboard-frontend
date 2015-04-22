'use strict';

angular.module('loopboardFrontApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('template', {
        templateUrl: 'app/template/views/container.html',
        controller: 'TemplateCtrl'
      });
  });
