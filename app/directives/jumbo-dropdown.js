

(function (module) {

    var jumboDropdown = function () {
        
        return {
            restrict: 'AE',
            scope: {
                dropdownTarget: '@',
            },
            controller: ['$scope', '$element', '$timeout', function ($scope, $element, $timeout) {

                

            }],
            link: function(scope, element, attrs) {
                var $dropdownTarget = $(scope.dropdownTarget),
                    $pageHeader = element.closest(".page-header"),
                    closedTop = ($dropdownTarget.outerHeight() + 36) * -1, // 36 is the height of the header (I'm cheating)
                    isOpen = false;

                $dropdownTarget.css({ top: closedTop });

                element.on("click", function(){
                    if(isOpen){
                        $dropdownTarget.css({ top: closedTop });
                    } else {
                        $dropdownTarget.css({ top: $pageHeader.outerHeight() });
                    }
                    isOpen = !isOpen;
                    element.toggleClass("open");
                    $dropdownTarget.toggleClass("open");
                });                
            }
        }        
    };

    module.directive("jumboDropdown", jumboDropdown);

}(angular.module("intuit.Directives")));