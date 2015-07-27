
(function (module) {

    var iframeCtrl = function ($scope, $rootScope, $sce) {
           var vm = this;

           vm.iframeSrc = $sce.trustAsResourceUrl($rootScope.iframeSrc);
    };

    module.controller("iframeCtrl", ['$scope', '$rootScope', '$sce', iframeCtrl]);

}(angular.module("intuit.Controllers")));