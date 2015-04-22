'use strict';

angular.module('loopboardFrontApp')
  .controller('SignCtrl', function (
    $scope,
    $state,
    Account
  ) {

    $scope.account = {}

    $scope.signin = function signin() {
      Account.login($scope.account, function success(account) {
        console.log(account);
        $state.go('template.home');
      }, function error(error) {
        console.log(error);
      });
    }

    var err = function () {};

    $scope.signup = function signin() {
      Account.create(
        $scope.account,
        $scope.signin,
        err
      );
    };

    // $scope.signout = function signout() {
    //   Account.logout(function success(msg) {
    //     console.log(msg);
    //   }, err);
    // };
  });
