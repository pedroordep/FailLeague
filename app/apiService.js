app.factory('api', ['$http', '$q', 'key', function($http, $q, key){
    var API_URL = "https://global.api.pvp.net/";
    var API_KEY = key.returnKey();

    function apiGetRequest(url, parameters){
        var defer = $q.defer();
        var parameters = parameters;
        parameters.api_key = API_KEY;

        $http({
            method: 'GET',
            url: API_URL + url,
            params : parameters
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
        getChampions : function(language){
            var def = $q.defer();
            var requestUrl = "api/lol/static-data/euw/v1.2/champion";
            var parameters = {champData:'all',locale:language};
            apiGetRequest(requestUrl, parameters).then(
                function(success){
                    def.resolve(success.data);
                },
                function(failure){
                    def.reject(failure);
                }
            );
            return def.promise;
        }/*,
        getLastVersion : function(){
            var def = $q.defer();
            var requestUrl = "api/lol/static-data/euw/v1.2/versions";
            var parameters = {};
            apiGetRequest(requestUrl, parameters).then(
                function(success){
                    def.resolve(success.data);
                },
                function(failure){
                    def.reject(failure);
                }
            );
            return def.promise;
        }*/
    }
}]);