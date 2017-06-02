angular
    .module('beTheGafferApp')
    .controller('mainPageController', mainPageController);

mainPageController.$inject = [
    '$scope',
    '$state',
    'localStorageService'
];

function mainPageController($scope, $state, localStorageService) {
    lg('CONTROLLER > in mainPageController');

    parentElement = angular.element(document.querySelector('#field-div'));
    var parentX = parentElement[0].clientHeight, parentY = parentElement[0].clientWidth;

    var rect = parentElement[0].getBoundingClientRect();
    lg("t: " + rect.top + " r: " + rect.right + "b:" + rect.bottom + " l:" + rect.left);

    // lg(parentElement[0].clientWidth);
    // lg(parentElement[0].offsetWidth);

    $scope.defaultPosition = {
        x: 0,
        y: 0
    };
}