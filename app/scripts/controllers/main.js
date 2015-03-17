'use strict';

/**
 * @ngdoc function
 * @name fitlogtestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fitlogtestApp
 */
angular.module('fitlogtestApp')
  .controller('MainCtrl', function ($scope, $resource) {

    var User = $resource('/api/users/:usedId', {userId: '@id'});

    $scope.userName = '';

    $scope.addUser = function() {
      var u = new User({'userName': 'foo'});
      u.$save();
    };

  });
