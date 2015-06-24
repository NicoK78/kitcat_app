'use strict';

/**
 * @class root.controllers.User
 * @description user controller.
 * @param {Class} $scope
 */
angular.module('kitcat').controller('User', function (API, Auth, $scope, $rootScope, $window, $location) {	
	

	var init = function () 
	{
		$scope.user = {};

		Auth.get(function(err, res){
			$scope.user = res;
			new Chartist.Line('.ct-chart', {
					  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
					  series: [
					    [12, 9, 7, 8, 5],
					    [2, 1, 3.5, 7, 3],
					    [1, 3, 4, 5, 6]
					  ]
					}, {
					  fullWidth: true,
					  chartPadding: {
					    right: 40
					  }
					});
		});
		
	};

	$scope.signin = function (username, password)
	{
		if ($scope.user) {
			$window.location.assign('/');
		}

		if (!username || !password || username === '' || password === '') {

			$rootScope.errmsg = 'Both fields are required';

			return false;
		}

		API.signin(username, password, function(err, res){

			if (!err) {
				Auth.update(res);
				$window.location.assign('/');
			} else {
				$rootScope.errmsg = err;

				return false;
			}

		});
	};

	init();
});