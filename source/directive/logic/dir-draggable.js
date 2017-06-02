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
            lg(scope.defaultPosition);
            var startX, startY, x = scope.defaultPosition.x, y = scope.defaultPosition.y;

            element.css({
                top: y + 'px',
                left:  x + 'px',
                position: 'relative',
                border: '1px solid red',
                backgroundColor: 'lightgrey',
                cursor: 'pointer',
                display: 'block',
                width: '65px'
            });

            element.on('mousedown', function(event) {
                event.preventDefault();
                startX = event.screenX - x;
                startY = event.screenY - y;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
            });

            function mousemove(event) {
                y = event.screenY - startY;
                x = event.screenX - startX;
                element.css({
                    top: y + 'px',
                    left:  x + 'px'
                });
            }

            function mouseup() {
                $document.off('mousemove', mousemove);
                $document.off('mouseup', mouseup);
            }
        }
    };
}