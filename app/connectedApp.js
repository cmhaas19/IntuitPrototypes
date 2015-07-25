

(function () {
    'use strict';

    angular.module("intuit.Directives", []);
    angular.module("intuit.Controllers", ["ui.bootstrap"]);

    angular.module("connectedApp", ["ngRoute", "ngAnimate", "ui.bootstrap", "intuit.Directives", "intuit.Controllers"])
        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider
                .when("/concept/a/intuit", { templateUrl: "/app/views/a-nav1/intuit.html", title: 'Nav1 - Intuit', bodyClass: 'menu-a intuit' })
                .when("/concept/a/quickbooks", { templateUrl: "/app/views/a-nav1/quickbooks.html", title: 'Nav1 - Quickbooks', bodyClass: 'menu-a quickbooks' })
                .when("/concept/a/mint", { templateUrl: "/app/views/a-nav1/mint.html", title: 'Nav1 - Mint', bodyClass: 'menu-a mint' })
                .when("/concept/a/turbotax", { templateUrl: "/app/views/a-nav1/turbotax.html", title: 'Nav1 - TurboTax', bodyClass: 'menu-a turbotax' })

                .when("/concept/b/quickbooks", { templateUrl: "/app/views/b-nav2/quickbooks.html", title: 'Nav2 - Quickbooks', bodyClass: 'menu-b nav2 quickbooks' })
                .when("/concept/b/turbotax", { templateUrl: "/app/views/b-nav2/turbotax.html", title: 'Nav2 - TurboTax', bodyClass: 'menu-b nav2 turbotax' })
                .when("/concept/b/mint", { templateUrl: "/app/views/b-nav2/mint.html", title: 'Nav2 - Mint', bodyClass: 'menu-b nav2 mint' })
                
                .when("/concept/d/quickbooks", { templateUrl: "/app/views/d-secondary-nav/quickbooks.html", title: 'Secondary Nav - Quickbooks', bodyClass: 'menu-d secondary-nav quickbooks' })
                .when("/concept/d/turbotax", { templateUrl: "/app/views/d-secondary-nav/turbotax.html", title: 'Secondary Nav - TurboTax', bodyClass: 'menu-d secondary-nav turbotax' })
                .when("/concept/d/mint", { templateUrl: "/app/views/d-secondary-nav/mint.html", title: 'Secondary Nav - Mint', bodyClass: 'menu-d secondary-nav mint' })                

                .when("/concept/e/quickbooks", { templateUrl: "/app/views/e-footer/quickbooks.html", title: 'Footer - Quickbooks', bodyClass: 'menu-e footer quickbooks' })
                .when("/concept/e/turbotax", { templateUrl: "/app/views/e-footer/turbotax.html", title: 'Footer - TurboTax', bodyClass: 'menu-e footer turbotax' })
                .when("/concept/e/mint", { templateUrl: "/app/views/e-footer/mint.html", title: 'Footer - Mint', bodyClass: 'menu-e footer mint' })                
                
                .otherwise({ 
                    templateUrl: "/app/views/home.html", 
                    bodyClass: 'concept-home' 
                });

        }])
        .run(['$rootScope', function ($rootScope) {
            $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
                var title = currentRoute.title || 'Home';

                $rootScope.title = 'Light connective tissue | ' + title;
                $rootScope.bodyClass = currentRoute.bodyClass;
            });
        }]);
})();