
(function (module) {

    var connectedCtrl = function ($scope, $q, $timeout, $modal) {
        var vm = this;

        vm.openSecurityModal = function(){
    		$modal.open({
		      templateUrl: 'securityModal.html',
		      controller: 'modalCtrl',
		    });
        };
        
    };

    module.controller("connectedCtrl", ['$scope', '$q', '$timeout', '$modal', connectedCtrl]);

}(angular.module("intuit.Controllers")));