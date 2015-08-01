

(function (module) {

    var jumboDropdown = function () {
        
        return {
            restrict: 'AE',
            scope: {
                dropdownTarget: '@',
                openText: '@',
                closedText: '@'
            },
            controller: ['$scope', '$element', '$timeout', function ($scope, $element, $timeout) {

                

            }],
            link: function(scope, element, attrs) {
                var $dropdownTarget = $(scope.dropdownTarget),
                    $pageHeader = element.closest(".page-header"),
                    $label = element.find(".dd-label"),
                    closedTop = ($dropdownTarget.outerHeight() + 36) * -1, // 36 is the height of the header (I'm cheating)
                    isOpen = false,
                    slideCount = 1;

                var swiper = new Swiper ('.swiper-container', {
                    direction: 'vertical',
                    loop: false,
                    roundLengths: true,
                    autoplay: 1000,
                    onSlideChangeEnd: function(slider){
                        slideCount++;
                        if(slideCount >= 3){
                            slider.stopAutoplay();
                        }
                    }
                });

                $dropdownTarget.css({ top: closedTop });

                element.on("click", function(){

                    if(isOpen){
                        element.one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
                            $label.text(scope.closedText);
                            $dropdownTarget.removeClass("open");
                        });
                        $dropdownTarget.css({ top: closedTop });
                    } else {
                        element.one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
                            $label.text(scope.openText);
                            $dropdownTarget.addClass("open");
                        });
                        $dropdownTarget.css({ top: $pageHeader.outerHeight() });
                    }
                    isOpen = !isOpen;
                    element.toggleClass("open");
                });

                                
            }
        }        
    };

    module.directive("jumboDropdown", jumboDropdown);

}(angular.module("intuit.Directives")));