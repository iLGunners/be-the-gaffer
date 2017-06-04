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

    $scope.playerSlotObjList = [
        {
            id: 1,
            title: "slot1",
            item: {
                no: 2,
                title: "Two"
            }
        },
        {
            id: 2,
            title: "slot2",
            item: {
                no: 1,
                title: "One"
            }
        }
    ];

    var onDraggableEvent = function(evt, data) {
        console.log("onDraggableEvent", evt, data);
    };
    $scope.$on('draggable:start', onDraggableEvent);
    //$scope.$on('draggable:move', onDraggableEvent);
    $scope.$on('draggable:end', onDraggableEvent);
    
    $scope.onDropComplete = function (evt, data) {
        lg("drop success, data:", data);
    };

}