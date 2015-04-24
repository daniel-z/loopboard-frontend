'use strict';

angular.module('loopboardFrontApp')
  .controller('CreateProjectController', function (
    $scope,
    $modalInstance,
    Account
  ) {
    /**
     * Required Angular Models
     */
    $scope.project = {};
    /**
     * Lest add a create method
     */
    $scope.create = function () {
      Account.projects.create({
          id: $scope.logged.id
        },
        $scope.project,
        $modalInstance.close,
        function error(err) {
          console.log(err);
        });
    };
  });
