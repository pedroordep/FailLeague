var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider,$locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'FailLeague/app/champsInfo/champsInfoView.html',
        controller: 'champsInfoController'
    })
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

}]).run( ['$rootScope', '$location', 'api', '$window', function($rootScope, $location, api, $window) {

}]);
