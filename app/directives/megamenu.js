

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
                    left = $toggleButton.position().left,
                    top = element.height() + $header.height();

                element.css({ 'left': left, top: -top });
                element.hidden = true;

                $toggleButton.on("click", function(e){
                    e.preventDefault();
                    $toggleButton.toggleClass("collapsed");

                    if(element.hidden === true) {
                        element.animate({
                            top: $header.height()
                        }, 500, function(){
                            element.hidden = false;
                        });
                    } else {
                        element.animate({
                            top: -top
                        }, 500, function(){
                            element.hidden = true;
                        });
                    }
                });
            }
        }        
    };

    module.directive("megamenu", megamenu);

}(angular.module("prototype.Directives")));