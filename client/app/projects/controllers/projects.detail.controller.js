'use strict';

angular.module('loopboardFrontApp')
  .controller('ProjectDetailCtrl', function (
    $scope,
    $stateParams,
    $modal,
    Account,
    Project,
    Category
  ) {

    $scope.project = [];
    $scope.category = {};
    $scope.categories = {};
    $scope.cards = [];

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
        filter: {
          include: {
            cards: {
              status
            }
          }
        }
      }, function success(categories) {
        $scope.categories = categories;
        $scope.category = {};

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

    $scope.createCard = function (category) {
      var modalInstance = $modal.open({
        templateUrl: 'app/projects/views/create.card.modal.html',
        controller: 'CreateCardController',
        resolve: {
          category: function () {
            return category
          },
          card: function () {
            return {};
          }
        }
      });

      modalInstance.result.then(function (card) {
        console.log(card);
      }, function () {});
      modalInstance.result.then($scope.getCategories());
    };

    $scope.editCard = function (card) {
      console.log('card', card);
      var modalInstance = $modal.open({
        templateUrl: 'app/projects/views/create.card.modal.html',
        controller: 'CreateCardController',
        resolve: {
          category: function () {
            return null;
          },
          card: function () {
            return card;
          }
        }
      });

      modalInstance.result.then(function (card) {
        console.log(card);
      }, function () {});
      modalInstance.result.then($scope.getCategories());
    };
  });
