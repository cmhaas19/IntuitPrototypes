

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
                    $header = $(".page-header");

                var positionMenu = function(){
                    var left = $toggleButton.position().left - 15,
                        top = ( element.outerHeight() - 50 ) * -1;

                    element.css({ 'left': left, top: top });
                };

                positionMenu();

                scope.hidden = true;

                $toggleButton.on("click.megamenu", function(e){
                    e.preventDefault();

                    $toggleButton.toggleClass("collapsed");

                    if(scope.hidden === true) {
                        element.animate({
                            top: $header.height()
                        }, 500, function() {
                            scope.hidden = false;
                        });
                    } else {
                        element.animate({
                            top: ( element.outerHeight() - 50 ) * -1
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

}(angular.module("prototype.Directives")));