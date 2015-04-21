'use strict';

angular.module('loopboardFrontApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('signin', {
        url: '/signin',
        templateUrl: 'app/sign/views/signin.html',
        controller: 'SignCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/sign/views/signup.html',
        controller: 'SignCtrl'
      });

  });
