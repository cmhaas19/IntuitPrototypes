

(function () {
    'use strict';

    angular.module("prototype.Directives", []);
    angular.module("prototype.Controllers", ["ui.bootstrap"]);

    angular.module("prototypeApp", ["ngRoute", "ui.bootstrap", "prototype.Directives", "prototype.Controllers"])
        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider
                .when("/concept/a/quickbooks", { templateUrl: "/app/views/conceptA/quickbooks.html", title: 'Concept A - Quickbooks', bodyClass: 'concept-a quickbooks' })
                .when("/concept/a/mint", { templateUrl: "/app/views/conceptA/mint.html", title: 'Concept A - Mint', bodyClass: 'concept-a mint' })
                .when("/concept/a/turbotax", { templateUrl: "/app/views/conceptA/turbotax.html", title: 'Concept A - TurboTax', bodyClass: 'concept-a turbotax' })

                .when("/concept/b/intuit", { templateUrl: "/app/views/conceptB/intuit.html", title: 'Concept B - Intuit', bodyClass: 'concept-b intuit' })
                .when("/concept/b/quickbooks", { templateUrl: "/app/views/conceptB/quickbooks.html", title: 'Concept B - Quickbooks', bodyClass: 'concept-b quickbooks' })
                .when("/concept/b/turbotax", { templateUrl: "/app/views/conceptB/turbotax.html", title: 'Concept B - TurboTax', bodyClass: 'concept-b turbotax' })
                .when("/concept/b/mint", { templateUrl: "/app/views/conceptB/mint.html", title: 'Concept B - Mint', bodyClass: 'concept-b mint' })
                
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