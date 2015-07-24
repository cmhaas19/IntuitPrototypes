
(function (module) {

    var prototypeCtrl = function ($scope, $q, $timeout, $modal) {
        var vm = this;

        vm.openSecurityModal = function(){
    		$modal.open({
		      templateUrl: 'securityModal.html',
		      controller: 'modalCtrl',
		    });
        };
        
    };

    module.controller("prototypeCtrl", ['$scope', '$q', '$timeout', '$modal', prototypeCtrl]);

}(angular.module("prototype.Controllers")));