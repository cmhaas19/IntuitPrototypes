

(function () {
    'use strict';

    angular.module("prototype.Directives", []);
    angular.module("prototype.Controllers", []);

    angular.module("prototypeApp", ["ngRoute", "ngAnimate", "prototype.Directives", "prototype.Controllers"])
        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider
                .when("/concept/a/quickbooks", { 
                    templateUrl: "/app/views/conceptA/index.html", 
                    title: 'Concept A - Quickbooks', 
                    bodyClass: 'concept-a quickbooks' 
                })
                .when("/concept/a/mint", { 
                    templateUrl: "/app/views/conceptA/index.html", 
                    title: 'Concept A - Mint', 
                    bodyClass: 'concept-a mint' 
                })
                .when("/concept/a/turbotax", { 
                    templateUrl: "/app/views/conceptA/index.html", 
                    title: 'Concept A - TurboTax', 
                    bodyClass: 'concept-a turbotax' 
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