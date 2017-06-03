angular
    .module('beTheGafferApp')
    .directive('dirDraggable', dirDraggable);

function dirDraggable ($document) {
    return {
        restrict: 'A',
        scope: {
            defaultPosition: '=',
            id: '@'
        },
        link: function(scope, element, attr) {
            var startX, startY, originX, originY;
            var x = scope.defaultPosition ? scope.defaultPosition.x : 0,
                y = scope.defaultPosition ? scope.defaultPosition.y : 0;

            var parentRectangle = returnRectangle('.field');
            lg("t:" + parentRectangle.top
                + " r:" + parentRectangle.right
                + " b:" + parentRectangle.bottom
                + " l:" + parentRectangle.left
            );

            playerElement = angular.element(document.querySelector('.player'))[0];
            var childY = playerElement.clientHeight, childX = playerElement.clientWidth;

            var playerRectangle = returnRectangle('.player');

            // lg("parentX:" +parentX +",parentY:" +parentY +",childX:" +childX +",childY:" +childY);
            element.css({
                top: y + 'px',
                left:  x + 'px'
            });

            element.on('mousedown', function(event) {
                event.preventDefault();

                originX = x;
                originY = y;
                startY = event.screenY - y;
                startX = event.screenX - x;

                $document.on('mousemove', mouseMove);
                $document.on('mouseup', mouseUp);
            });

            function mouseMove(event) {
                y = event.screenY - startY;
                x = event.screenX - startX;

                if(returnRectangle('#' + scope.id).top <= returnRectangle('.field').top){
                    lg("Top Hit");
                } else if(returnRectangle('#' + scope.id).bottom >= returnRectangle('.field').bottom){
                    lg("Bottom Hit");
                } else if(returnRectangle('#' + scope.id).left <= returnRectangle('.field').left){
                    lg("Left Hit");
                } else if(returnRectangle('#' + scope.id).right >= returnRectangle('.field').right){
                    lg("Right Hit");
                } else {
                    element.css({
                        top: y + 'px',
                        left:  x + 'px'
                    });
                }
            }

            function mouseUp() {
                $document.off('mousemove', mouseMove);
                $document.off('mouseup', mouseUp);
            }
        }
    };
}

function returnRectangle (elem) {
    return angular.element(document.querySelector(elem))[0].getBoundingClientRect();
}