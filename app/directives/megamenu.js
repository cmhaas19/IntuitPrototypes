

(function (module) {

    var megamenu = function () {
        
        return {
            restrict: 'AE',
            scope: {
                toggleButton: '@'
            },
            controller: ['$scope', '$element', function ($scope, $element) {
                


            }],
            link: function(scope, element, attrs) {
                var $toggleButton = $(scope.toggleButton),
                    $header = $(".page-header"),
                    left = $toggleButton.position().left - 15,
                    top = element.outerHeight();

                element.css({ 'left': left, top: -top });
                scope.hidden = true;

                $toggleButton.on("click.megamenu", function(e){
                    e.preventDefault();

                    $toggleButton.toggleClass("collapsed");

                    if(scope.hidden === true) {
                        element.animate({
                            top: $header.height()
                        }, 500, function(){
                            scope.hidden = false;
                        });
                    } else {
                        element.animate({
                            top: -top
                        }, 500, function(){
                            scope.hidden = true;
                        });
                    }
                });

                scope.$on('$destroy', function () {
                    $toggleButton.off("click.megamenu");
                });

                $(window).on("resize", function(){
                    // TODO: Recalibrate element's height and hidden 'top' position
                });
            }
        }        
    };

    module.directive("megamenu", megamenu);

}(angular.module("prototype.Directives")));