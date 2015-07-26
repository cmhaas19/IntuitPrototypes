
(function (module) {

    var clickCarousel = function () {
        return {
            restrict: 'A',
            scope: {},
            require: ['^carousel'],
            link: function (scope, element, attrs, controllers) {
                var carousel = controllers[0];                

                var getNextSlideIndex = function(){
                    if ((carousel.indexOfSlide(carousel.currentSlide) + 1) === carousel.slides.length) {
                        return 0;
                    } else {
                        return carousel.indexOfSlide(carousel.currentSlide) + 1;
                    }
                }

                element.on("click", function(){
                    var index = getNextSlideIndex(),
                        slide = carousel.slides[index];

                    carousel.select(slide);
                });
            }
        };
              
    };

    module.directive("clickCarousel", clickCarousel);

}(angular.module("intuit.Directives")));