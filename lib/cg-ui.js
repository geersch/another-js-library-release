angular.module('cg-ui', []);

var collapsibleFn = function () {
    return {
        restrict: 'A',
        scope: true,
        link: function(scope, element, attributes) {
            var STATE;
            scope.isCollapsed = attributes.cgCollapsibleCollapsed;
            STATE = {
                COLLAPSED: 'cg-panel--collapsed',
                EXPANDED: 'cg-panel--expanded'
            };
            return scope.toggle = function() {
                scope.isCollapsed = !scope.isCollapsed;
                if (scope.isCollapsed) {
                    element.removeClass(STATE.EXPANDED).addClass(STATE.COLLAPSED);
                } else {
                    element.removeClass(STATE.COLLAPSED).addClass(STATE.EXPANDED);
                }
            };
        }
    };
};

angular.module('cg-ui').directive('cgCollapsible', collapsibleFn);