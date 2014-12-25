'use strict';

/**
 * @ngdoc overview
 * @name deffileApp
 * @description
 * # deffileApp
 *
 * Main module of the application.
 */
angular
  .module('deffileApp', [
    // 'ngAnimate'
    ,'ngCookies'
    ,'ngResource'
    ,'ngRoute'
    // ,'ngSanitize'
    // ,'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/admin/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: '/admin/views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
