
(function (module) {

    var carouselCtrl = function ($scope, $route) {
        var vm = this;

        // Get the slides from the route definition
		vm.slides = $route.current.slides;

        // Cycle through slides (at end, start back at begining)
        vm.noWrapSlides = false;

        // Disable auto-sliding
		vm.slideInterval = -1; 
		
    };

    module.controller("carouselCtrl", ['$scope', '$route', carouselCtrl]);

}(angular.module("intuit.Controllers")));