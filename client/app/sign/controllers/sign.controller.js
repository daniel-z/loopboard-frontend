'use strict';

angular.module('loopboardFrontApp')
  .controller('SignCtrl', function (
    $scope,
    Account
  ) {

    $scope.account = {}

    $scope.signin = function signin() {
      Account.login($scope.account, function success(account) {
        console.log(account);
      }, function error(error) {
        console.log(error);
      });
    }

  });
