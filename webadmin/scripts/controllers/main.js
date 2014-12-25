'use strict';

/**
 * @ngdoc function
 * @name deffileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the deffileApp
 */
angular.module('deffileApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
