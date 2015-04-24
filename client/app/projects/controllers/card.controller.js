'use strict';

angular.module('loopboardFrontApp')
  .controller('CreateCardController', function (
    $scope,
    $modalInstance,
    Category,
    CardStatus,
    category,
    card,
    Card
  ) {
    /**
     * Required Angular Models
     */
    $scope.project = {};
    /**
     * Lest add a create method
     */
    $scope.createCard = function () {
      Category.cards.create({
          id: category.id
        },
        $scope.card,
        $modalInstance.close,
        function error(err) {
          console.log(err);
        });
    };

    CardStatus.find(function (statuses) {
      $scope.statuses = statuses;
    });

    if (card.id) {
      Card.findOne({
          filter: {
            where: {
              id: card.id
            },
            include: ["status", {
              "cardActivities": "account"
            }]
          }
        },
        function success(card) {
          $scope.card = card;
        }
      );
    }

  });
