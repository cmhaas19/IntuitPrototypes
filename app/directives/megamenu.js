

(function (module) {

    var megamenu = function () {
        
        return {
            restrict: 'AE',
            scope: {
                toggleButton: '@',
                header: '@'
            },
            controller: ['$scope', '$element', function ($scope, $element) {
                


            }],
            link: function(scope, element, attrs) {
                var $toggleButton = $(scope.toggleButton),
                    $header = $(scope.header);

                var positionMenu = function(){
                    var left = $toggleButton.position().left - 15,
                        top = -5000;

                    element.css({ 'left': left, top: top });
                };

                var getTop = function(){
                    return ( element.outerHeight() - $header.outerHeight() ) * -1;
                };

                positionMenu();

                scope.hidden = true;

                $toggleButton.on("click.megamenu", function(e){
                    e.preventDefault();

                    $toggleButton.toggleClass("collapsed");

                    if(scope.hidden === true) {
                        element.css({ top: getTop() });

                        element.animate({
                            top: $header.height()
                        }, 500, function() {
                            scope.hidden = false;
                        });
                    } else {
                        element.animate({
                            top: getTop()
                        }, 500, function() {
                            scope.hidden = true;
                        });
                    }
                });

                scope.$on('$destroy', function () {
                    $toggleButton.off("click.megamenu");
                });

                $(window).on("resize", function(){
                    positionMenu();
                });
            }
        }        
    };

    module.directive("megamenu", megamenu);

}(angular.module("intuit.Directives")));