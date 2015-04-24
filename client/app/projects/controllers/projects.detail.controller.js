'use strict';

angular.module('loopboardFrontApp')
  .controller('ProjectDetailCtrl', function (
    $scope,
    $stateParams,
    Account,
    Project
  ) {

    $scope.project = [];
    $scope.category = {};
    $scope.categories = {};

    $scope.getProjects = function (logged) {
      Account.projects({
        id: logged.id,
        filter: {
          where: {
            id: $stateParams.id
          }
        }
      }, function success(projects) {
        $scope.project = projects[0];
      });
    };

    $scope.getCategories = function getCategories() {
      Project.categories({
        id: $stateParams.id,
      }, function success(categories) {
        $scope.categories = categories;
        $scope.category = {};
        console.log(categories);
      }, function error(error) {
        console.log('error', error);
      });
    };

    $scope.addCategory = function addCategory() {
      Project.categories.create({
        id: $stateParams.id
      }, $scope.category, function (category) {
        console.log(category);
        $scope.getCategories();
      });
    };

    $scope.$watch('logged', function (logged) {
      if (typeof logged != "undefined") {
        $scope.getProjects(logged);
        $scope.getCategories();
      }
    });
  });
