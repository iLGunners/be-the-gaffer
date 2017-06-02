angular
    .module('beTheGafferApp')
    .directive('dirDraggable', dirDraggable);

function dirDraggable ($document) {
    return {
        restrict: 'A',
        scope: {
            defaultPosition: '=',
        },
        link: function(scope, element, attr) {
            var startX, startY, originX, originY;
            var x = scope.defaultPosition ? scope.defaultPosition.x : 0,
                y = scope.defaultPosition ? scope.defaultPosition.y : 0;

            var parentRectngle = returnRectngle('.field');
            lg("t:" + parentRectngle.top
                + " r:" + parentRectngle.right
                + " b:" + parentRectngle.bottom
                + " l:" + parentRectngle.left
            );

            playerElement = angular.element(document.querySelector('.player'))[0];
            var childY = playerElement.clientHeight, childX = playerElement.clientWidth;

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
                element.css({
                    position: 'relative',
                });

                y = event.screenY - startY;
                x = event.screenX - startX;

                lg(x +"," +y);

                element.css({
                    position: 'relative',
                    top: y + 'px',
                    left:  x + 'px'
                });
            }

            function mouseUp() {
                $document.off('mousemove', mouseMove);
                $document.off('mouseup', mouseUp);
            }
        }
    };
}