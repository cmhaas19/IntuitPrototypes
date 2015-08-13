

(function (module) {

    var floatingFooter = function () {
        
        return {
            restrict: 'AE',
            scope: {

            },
            controller: ['$scope', '$element', '$timeout', function ($scope, $element, $timeout) {

                $scope.open = function() {
                    $element.addClass("open");                    
                };

                $scope.close = function() {
                    $element.removeClass("open");                   
                }

            }],
            link: function(scope, element, attrs) {
                
                element.closest(".page").one("scroll", function(){
                    scope.open();
                });

                element.closest(".page").one("touchmove", function(){
                    scope.open();
                });

                element.on('mouseenter', function(){
                    scope.open();
                });

                element.on('click', function(){
                    scope.open();
                });

                element.find(".close-button").on("click", function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    scope.close();
                });
            }
        }        
    };

    module.directive("floatingFooter", floatingFooter);

}(angular.module("intuit.Directives")));