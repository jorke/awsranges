'use strict';

/**
 * @ngdoc overview
 * @name awsrangesApp
 * @description
 * # awsrangesApp
 *
 * Main module of the application.
 */
angular
  .module('awsrangesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
