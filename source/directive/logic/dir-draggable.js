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
            var startX, startY, originX, originY,
                x = scope.defaultPosition ? scope.defaultPosition.x : 0,
                y = scope.defaultPosition ? scope.defaultPosition.y : 0;

            parentElement = angular.element(document.querySelector('#field-div'));
            var parentX = parentElement[0].clientHeight, parentY = parentElement[0].clientWidth;

            childElement = angular.element(document.querySelector('#player-div'));
            var childX = childElement[0].clientHeight, childY = childElement[0].clientWidth;

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
                lg("start: " + startY + "," + startX);
                y = event.screenY - startY;
                x = event.screenX - startX;

                if(y > 0
                    && y < parentX-childX
                    && x > -(parentY/2-childY/2)
                    && x < (parentY/2-childY/2)) {
                    element.css({
                        top: y + 'px',
                        left:  x + 'px'
                    });
                } else {
                    y = originY;
                    x = originX;
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