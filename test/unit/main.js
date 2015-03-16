'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('famousAngularStarter'));

  beforeEach(inject(function($rootScope) {
  	scope = $rootScope.$new();
  }));

  it('should define 3 awesome things', inject(function($controller) {
    expect(scope.awesomeThings).toBeUndefined()

    $controller('MainCtrl', {
      $scope: scope
  	})

    expect(angular.isArray(scope.awesomeThings)).toBeTruthy();
    expect(scope.awesomeThings.length).toBe(3);
  }));
});
