'use strict';

describe('Controller: SignCtrl', function () {

  // load the controller's module
  beforeEach(module('loopboardFrontApp'));

  var SignCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignCtrl = $controller('SignCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
