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
  }).run(function ($rootScope, Account, $location) {
    /**
     * Added moment to $rootScope
     */
    $rootScope.moment = moment;
    /**
     * Verify if user is logged
     */
    $rootScope.$on('$stateChangeStart', function stateChanged() {
      if (Account.isAuthenticated()) {
        Account.getCurrent(function getAccount(account) {
          $rootScope.logged = account;
        });
      } else {
        if ($location.path() != '/signin' && $location.path() != '/signup' && $location.path() != '/signout')
          $location.path("/signin");
        $rootScope.logged = false;
      }
    })

  });
