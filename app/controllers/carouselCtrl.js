
(function (module) {

    var carouselCtrl = function ($scope, $rootScope) {
        var vm = this;

        // Cycle through slides (at end, start back at begining)
        vm.noWrapSlides = false;

        // Disable auto-sliding
		vm.slideInterval = -1;         
    };

    module.controller("carouselCtrl", ['$scope', '$rootScope', carouselCtrl]);

}(angular.module("intuit.Controllers")));