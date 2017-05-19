(function() {
    'use strict';

    angular.module('app').config(function($urlRouterProvider, $ionicCloudProvider) {
        $urlRouterProvider.otherwise('/');

        $ionicCloudProvider.init({
            'core': {
                'app_id': '34b8e270'
            }
        });
    });

})();
