app.factory('api', ['$http', '$q', 'key', function($http, $q, key){
    var API_URL = "https://euw.api.pvp.net/";
    var API_KEY = key.returnKey();

    function apiGetRequest(url){
        var defer = $q.defer();

        var params={'api_key':API_KEY};

        $http({
            method: 'GET',
            url: API_URL + url,
            params : params
        }).then(
            function(success){
                defer.resolve(success);
            },
            function(failure){
                defer.reject(failure);
            }
        );
        return defer.promise;
    }

    return{
        getChampions : function(){
            var def = $q.defer();
            var requestUrl = "api/lol/euw/v1.2/champion";
            apiGetRequest(requestUrl).then(
                function(success){
                    def.resolve(success);
                },
                function(failure){
                    def.reject(failure);
                }
            );
            return def.promise;
        }
    }
}]);