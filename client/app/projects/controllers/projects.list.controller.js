'use strict';

angular.module('loopboardFrontApp')
  .controller('ProjectsListCtrl', function (
    $scope,
    $modal,
    Account,
    AccountProject
  ) {

    $scope.openCreateProject = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'app/projects/views/create.modal.html',
        controller: 'CreateProjectController',
        resolve: {}
      });

      modalInstance.result.then(function (project) {
        console.log(project);
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
      modalInstance.result.then($scope.getProjects);
    };

    $scope.getProjects = function () {
      AccountProject.find({
        filter: {
          where: {
            accountId: $scope.logged.id
          },
          include: "project",
          order: "createAt DESC"
        }
      }, function success(accountProjects) {
        $scope.accountProjects = accountProjects;
      });
    };


    $scope.$watch('logged', function (logged) {
      if (typeof logged != "undefined") {
        $scope.getProjects();
      }
    });
  });
