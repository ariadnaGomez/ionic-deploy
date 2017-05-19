(function() {
    'use strict';

    angular.module('app.intro').controller('IntroCtrl', IntroCtrl);

    function IntroCtrl($scope, $ionicDeploy, $ionicLoading) {
        $ionicDeploy.check().then(function(snapshotAvailable) {
            if (snapshotAvailable) {
                $ionicLoading.show();
                $ionicDeploy.download().then(function() {
                    $ionicDeploy.extract().then(function() {
                        $ionicDeploy.load();
                        $ionicLoading.hide();
                    });
                });
            }
        });
    }
})();
