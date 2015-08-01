

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
                    autoplay: 2000,
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
                        $dropdownTarget.css({ top: closedTop });
                        $label.text(scope.closedText);
                        //swiper.startAutoplay();
                    } else {
                        $dropdownTarget.css({ top: $pageHeader.outerHeight() });
                        $label.text(scope.openText);
                        //swiper.stopAutoplay();
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