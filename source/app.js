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
                templateUrl: 'view/main-page.component.html',
                controller: 'mainPageController'
            })
    }
]);

hrApp.run([
    '$rootScope', '$location', '$state', '$templateCache', 'localStorageService',
    function($rootScope, $location, $state, $templateCache, localStorageService) {
        lg("APP.js > in beTheGafferApp.run");

        $rootScope.$on('$locationChangeStart', function(event, next, current) {
            // lg("APP.js > in $locationChangeStart");
            // authentication could go here
        });

        $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
            // lg("APP.js > in $stateChangeSuccess");
            globalStateChangeDetail.fromState = from;
            globalStateChangeDetail.toState = to;

            localStorageService.set("globalStateChangeDetail", globalStateChangeDetail);
        });

        $rootScope.$on('$viewContentLoaded', function() {
            // lg("APP.js > in $viewContentLoaded");
            $templateCache.removeAll();
        });
    }
]);

function lg(message) {
    console.log(message);
}

function returnRectngle(elementClass) {
    return angular.element(document.querySelector(elementClass))[0].getBoundingClientRect();
}