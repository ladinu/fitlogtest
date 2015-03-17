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

    var u = new User();
    u.$save();

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
