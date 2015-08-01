

(function () {
    'use strict';

    angular.module("intuit.Directives", []);
    angular.module("intuit.Controllers", ["ui.bootstrap"]);

    angular.module("connectedApp", ["ngRoute", "ngAnimate", "ui.bootstrap", "intuit.Directives", "intuit.Controllers"])
        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider
                .when("/concept/a/intuit", { templateUrl: "/apps/connected/views/a-nav1/intuit.html", title: 'Nav1 - Intuit', bodyClass: 'menu-a has-mobile intuit' })
                .when("/concept/a/quickbooks", { templateUrl: "/apps/connected/views/a-nav1/quickbooks.html", title: 'Nav1 - Quickbooks', bodyClass: 'menu-a has-mobile quickbooks' })
                .when("/concept/a/mint", { templateUrl: "/apps/connected/views/a-nav1/mint.html", title: 'Nav1 - Mint', bodyClass: 'menu-a has-mobile mint' })
                .when("/concept/a/turbotax", { templateUrl: "/apps/connected/views/a-nav1/turbotax.html", title: 'Nav1 - TurboTax', bodyClass: 'menu-a has-mobile turbotax' })
                .when("/concept/a/mobile", { templateUrl: "/apps/connected/views/a-nav1/mobile.html", title: 'Nav1 - Mobile', bodyClass: 'menu-a has-mobile is-mobile' })

                .when("/concept/b/quickbooks", { templateUrl: "/apps/connected/views/b-nav2/quickbooks.html", title: 'Nav2 - Quickbooks', bodyClass: 'menu-b has-mobile quickbooks' })
                .when("/concept/b/turbotax", { templateUrl: "/apps/connected/views/b-nav2/turbotax.html", title: 'Nav2 - TurboTax', bodyClass: 'menu-b has-mobile turbotax' })
                .when("/concept/b/mint", { templateUrl: "/apps/connected/views/b-nav2/mint.html", title: 'Nav2 - Mint', bodyClass: 'menu-b has-mobile mint' })
                .when("/concept/b/mobile", { templateUrl: "/apps/connected/views/b-nav2/mobile.html", title: 'Nav2 - Mobile', bodyClass: 'menu-b has-mobile is-mobile' })

                .when("/concept/c/quickbooks", { templateUrl: "/apps/connected/views/c-bar/quickbooks.html", title: 'Bar - Quickbooks', bodyClass: 'menu-c has-mobile quickbooks' })
                .when("/concept/c/turbotax", { templateUrl: "/apps/connected/views/c-bar/turbotax.html", title: 'Bar - TurboTax', bodyClass: 'menu-c has-mobile turbotax' })
                .when("/concept/c/mint", { templateUrl: "/apps/connected/views/c-bar/mint.html", title: 'Bar - Mint', bodyClass: 'menu-c has-mobile mint' })
                .when("/concept/c/mobile", { templateUrl: "/apps/connected/views/c-bar/mobile.html", title: 'Bar - Mobile', bodyClass: 'menu-c has-mobile is-mobile' })
                
                .when("/concept/d/quickbooks", { templateUrl: "/apps/connected/views/d-secondary-nav/quickbooks.html", title: 'Secondary Nav - Quickbooks', bodyClass: 'menu-d has-mobile quickbooks' })
                .when("/concept/d/turbotax", { templateUrl: "/apps/connected/views/d-secondary-nav/turbotax.html", title: 'Secondary Nav - TurboTax', bodyClass: 'menu-d has-mobile turbotax' })
                .when("/concept/d/mint", { templateUrl: "/apps/connected/views/d-secondary-nav/mint.html", title: 'Secondary Nav - Mint', bodyClass: 'menu-d has-mobile mint' })   
                .when("/concept/d/mobile", { templateUrl: "/apps/connected/views/d-secondary-nav/mobile.html", title: 'Secondary Nav - Mobile', bodyClass: 'menu-d has-mobile is-mobile' })              

                .when("/concept/e/quickbooks", { templateUrl: "/apps/connected/views/e-footer/quickbooks.html", title: 'Footer - Quickbooks', bodyClass: 'menu-e has-mobile footer quickbooks' })
                .when("/concept/e/turbotax", { templateUrl: "/apps/connected/views/e-footer/turbotax.html", title: 'Footer - TurboTax', bodyClass: 'menu-e has-mobile footer turbotax' })
                .when("/concept/e/mint", { templateUrl: "/apps/connected/views/e-footer/mint.html", title: 'Footer - Mint', bodyClass: 'menu-e has-mobile footer mint' })    
                .when("/concept/e/mobile", { templateUrl: "/apps/connected/views/e-footer/mobile.html", title: 'Footer - Mobile', bodyClass: 'menu-e has-mobile is-mobile' })                         
                
                .otherwise({ 
                    redirectTo: "/" 
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