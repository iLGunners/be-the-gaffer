var hrApp = angular.module(
    'beTheGafferApp',
    [
        'ui.router',
        'LocalStorageModule'
        // 'ngMaterial'
    ]
);

var globalStateChangeDetail = {
    "fromState": null,
    "toState": null
};

hrApp.config([
    '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('main-page');

        $stateProvider
            .state('main-page', {
                url: '/main-page',
                templateUrl: 'views/main-page.component.html',
                controller: 'mainPageController'
            })
    }
]);

hrApp.run([
    '$rootScope', '$location', '$state', '$templateCache', 'localStorageService',
    function($rootScope, $location, $state, $templateCache, localStorageService) {
        lg("APP.js > in beTheGafferApp.run");
        $rootScope.$on('$locationChangeStart', function(event, next, current) {});
        $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {});
        $rootScope.$on('$viewContentLoaded', function() {
            $templateCache.removeAll();
        });
    }
]);

function lg(message) {
    console.log(message);
}