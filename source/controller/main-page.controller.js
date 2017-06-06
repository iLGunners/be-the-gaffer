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
            item: null
        },
        {
            id: 3,
            title: "slot3",
            item: {
                no: 1,
                title: "One"
            }
        }
    ];

    var onDraggableEvent = function(evt, data) {
        // console.log("onDraggableEvent", evt, data);
    };
    $scope.$on('draggable:start', onDraggableEvent);
    //$scope.$on('draggable:move', onDraggableEvent);
    $scope.$on('draggable:end', onDraggableEvent);

    $scope.onDropSuccess = function (evt, fromSlot, toSlot) {
        console.log("drop success, data:", toSlot, fromSlot);
        if(toSlot.item === null){
            toSlot.item = fromSlot.item;
            fromSlot.item = null;
        }

        // for(i in $scope.playerSlotObjList) {
        //     if($scope.playerSlotObjList[i].item !== null){
        //         if($scope.playerSlotObjList[i].item.no === item.no){
        //             playerSlot.item = item;
        //             $scope.playerSlotObjList[i].item = null;
        //             return;
        //         }
        //     }
        // }
    };

}