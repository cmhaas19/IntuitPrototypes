
(function (module) {

    var prototypeCtrl = function ($scope, $q, $timeout, $modal) {
        var vm = this;

        vm.openSecurityModal = function(){
    		$modal.open({
		      templateUrl: 'securityModal.html'
		    });
        };

        vm.closeSecurityModal = function(){
    		$modal.close();
        }
        
    };

    module.controller("prototypeCtrl", ['$scope', '$q', '$timeout', '$modal', prototypeCtrl]);

}(angular.module("prototype.Controllers")));