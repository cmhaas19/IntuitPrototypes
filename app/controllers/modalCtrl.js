
(function (module) {

    var modalCtrl = function ($scope, $modalInstance) {
        
        $scope.close = function(){
            $modalInstance.dismiss('cancel');
        }
        
    };

    module.controller("modalCtrl", ['$scope', '$modalInstance', modalCtrl]);

}(angular.module("prototype.Controllers")));