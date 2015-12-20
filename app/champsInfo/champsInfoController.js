app.controller('champsInfoController', ['$scope','$location','api', function($scope,$location,api) {

    api.getChampions().then(
        function(success){
            console.log(success);
        },
        function(failure){
            console.log(failure);
        }
    );

}]);