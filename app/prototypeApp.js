

(function () {
    'use strict';

    angular.module("prototype.Controllers", []);

    angular.module("prototypeApp", ["ngRoute", "prototype.Controllers"])
        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider
                .when("/concept/a/quickbooks", { 
                    templateUrl: "/app/views/conceptA/quickbooks.html", 
                    title: 'Concept A - Quickbooks', 
                    bodyClass: 'concept-a quickbooks' 
                })

                .otherwise({ 
                    templateUrl: "/app/views/home.html", 
                    bodyClass: 'concept-home' 
                });

        }])
        .run(['$rootScope', function ($rootScope) {
            $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
                var title = currentRoute.title || 'Home';

                $rootScope.title = 'Inuit - Common Elements Prototypes | ' + title;
                $rootScope.bodyClass = currentRoute.bodyClass;
            });
        }]);
})();