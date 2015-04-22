'use strict';

angular.module('loopboardFrontApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'lbServices'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, LoopBackResourceProvider) {
    $urlRouterProvider
      .otherwise('/home');

    $locationProvider.html5Mode(true);

    LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');
  }).run(function ($rootScope, Account) {
    // user logged?
    if (Account.isAuthenticated()) {
      Account.getCurrent(function getAccount(account) {
        $rootScope.logged = account;
        console.log('account:', account);
      });
    } else {
      $rootScope.logged = false;
      console.log('NO user logged!');
    }

  });
