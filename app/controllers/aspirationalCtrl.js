
(function (module) {

    var aspirationalCtrl = function ($scope, $rootScope) {
        var vm = this;

        // Cycle through slides (at end, start back at begining)
        vm.noWrapSlides = false;

        // Disable auto-sliding
		vm.slideInterval = -1;         
    };

    module.controller("aspirationalCtrl", ['$scope', '$rootScope', aspirationalCtrl]);

}(angular.module("intuit.Controllers")));