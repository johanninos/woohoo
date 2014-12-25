'use strict';

/**
 * @ngdoc function
 * @name deffileApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the deffileApp
 */
angular.module('deffileApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
