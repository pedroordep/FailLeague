var app = angular.module('app', ['ngRoute', 'ngSanitize']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider,$locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/champsInfo/champsInfoView.html',
        controller: 'champsInfoController'
    })
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

}]).run( ['$rootScope', '$location', 'api', '$window', function($rootScope, $location, api, $window) {

}]);
