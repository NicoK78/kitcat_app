'use strict';

 /**
  * @module root.kitcat
  * @description Main module for AngularJs App
  */
angular
  .module('kitcat', [
  	'ngRoute'
  ])
  .config(function($routeProvider, $httpProvider) {
    
    $httpProvider.defaults.headers.common['Authorization'] = 'Bearer 1234';
      
    $routeProvider
      .when('/', {
        templateUrl: 'src/views/home.html',
        controller: 'Home'
      })
      .otherwise({
        redirectTo: '/'
      });
  });