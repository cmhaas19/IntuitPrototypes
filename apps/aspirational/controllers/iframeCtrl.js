
(function (module) {

    var iframeCtrl = function ($scope, $route, $sce) {
           var vm = this;

           vm.iframeSrc = $sce.trustAsResourceUrl($route.current.iframeSrc);
    };

    module.controller("iframeCtrl", ['$scope', '$route', '$sce', iframeCtrl]);

}(angular.module("intuit.Controllers")));