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
    var Routine = $resource('/api/users/:userId/routines', {userId: '@userId'});

    $scope.userName = '';
    $scope.user = null;
    $scope.routineName = '';
    $scope.routines = [];

    $scope.addUser = function() {
      var u = new User({'userName': $scope.userName});
      u.$save();
      $scope.user = u;
    };

    $scope.addRoutine = function() {
      var r = new Routine({'userId': $scope.user.id, 'routineName': $scope.routineName, 'workouts': []});
      r.$save();
    };

    $scope.getRoutines = function() {
      $scope.routines = Routine.query({'userId': $scope.user.id});
    };



  });
