'use strict';

/**
 * @class root.controllers.Home
 * @description home page controller.
 * @param {Class} $scope
 */
angular.module('kitcat').controller('Home', function (API, Auth, $scope, $rootScope, $window) {
	
	var init = function () 
	{
		Auth.get(function(err, res){
			$scope.user = res;

			if ($scope.user) {
				API.getCatsByOwner($scope.user._id, function(err, cats){
					$scope.cats = cats;
				});
				CervoControl.init();
			}
		});
	};

	$scope.signin = function (user)
	{

		if (!user.username || !user.password || user.username === '' || user.password === '') {
			$rootScope.errmsg = 'Both fields are required';

			return false;
		}

		API.signin(user.username, user.password, function(err, res){

			if (!err) {
				Auth.update(res);
				$window.location.assign('/');
			} else {
				$scope.errmsg = err;

				return false;
			}
		});
	};

	$scope.logout = function ()
	{
		Auth.remove();
		$scope.user = null;
		$window.location.assign('/'); 
	};

	init();
});