app.controller('champsInfoController', ['$scope','$location','$anchorScroll','api', function($scope,$location,$anchorScroll,api) {

    $scope.championImageUrl = 'http://ddragon.leagueoflegends.com/cdn/5.24.2/img/champion/';
    $scope.spellImageUrl = 'http://ddragon.leagueoflegends.com/cdn/5.24.2/img/spell/';
    $scope.passiveImageUrl = 'http://ddragon.leagueoflegends.com/cdn/5.24.2/img/passive/';
    $scope.loadingImageUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/';
    $scope.languages = [
        "en_US",
        "cs_CZ",
        "de_DE",
        "el_GR",
        "en_AU",
        "en_GB",
        "en_PH",
        "en_PL",
        "en_SG",
        "es_AR",
        "es_ES",
        "es_MX",
        "fr_FR",
        "hu_HU",
        "id_ID",
        "it_IT",
        "ja_JP",
        "ko_KR",
        "ms_MY",
        "pl_PL",
        "pt_BR",
        "ro_RO",
        "ru_RU",
        "th_TH",
        "tr_TR",
        "vn_VN",
        "zh_CN",
        "zh_MY",
        "zh_TW"
    ];
    $scope.language = $scope.languages[0];
    $scope.loading = 1;
    $scope.champions = {};
    $scope.championSelected = {};
    $scope.championSelectedBool = false;

    /*$scope.version = 0;
    api.getLastVersion().then(
        function(success){
            console.log(success[0]);
            $scope.version = success[0];
        },
        function(failure){
            console.log(failure);
        }
    );*/

    $scope.$watch('language', function(value){
        if($.inArray(value, $scope.languages) != -1){
            $scope.loading = 1;
            $scope.championSelectedBool = false;
            $scope.championSelected = {};
            $scope.champions = {};
            api.getChampions($scope.language).then(
                function(success){
                    $scope.loading = 0;
                    $scope.champions = success.data;
                },
                function(failure){
                    $scope.loading = 0;
                    console.log(failure);
                }
            );
        }
    });

    $scope.showInfo = function(champion){
        $scope.championSelected = champion;
        $scope.championSelectedBool = true;
        console.log($scope.championSelected);
        //$location.hash('top');
        $anchorScroll();
    };

}]);