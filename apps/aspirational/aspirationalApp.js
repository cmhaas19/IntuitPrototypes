

(function () {
    'use strict';

    angular.module("intuit.Directives", ["ui.bootstrap"]);
    angular.module("intuit.Controllers", ["ui.bootstrap"]);

    angular.module("aspirationalApp", ["ngRoute", "ngAnimate", "ngTouch", "ui.bootstrap", "intuit.Directives", "intuit.Controllers"])
        .config(['$routeProvider', function ($routeProvider) {

            var templateUrl = "/apps/aspirational/views/carousel.html";

            $routeProvider
                .when("/concept/a", {
                    templateUrl: templateUrl,
                    title: 'A',
                    bodyClass: "menu-a",
                    slides: [
                        '/assets/images/aspirational/A1-Intuit-ToolsInnovation-v4.jpg',
                        '/assets/images/aspirational/A2-Intuit-ToolsInnovation-v6.jpg'
                    ]
                }) 
                .when("/concept/b", {
                    templateUrl: templateUrl,
                    title: 'B',
                    bodyClass: "menu-b",
                    slides: [
                        '/assets/images/aspirational/B1-Intuit-NewWay-v6-1.jpg',
                        '/assets/images/aspirational/B2-Intuit-NewWay-v6-2.jpg',
                        '/assets/images/aspirational/B3-Intuit-NewWay-v6-3.jpg'
                    ]
                })
                .when("/concept/c", {
                    templateUrl: "/apps/aspirational/views/iframe.html",
                    title: 'C',
                    bodyClass: "menu-c",
                    iframeSrc: "http://s.codepen.io/team/xdp/debug/4cfe53abcedac42ae62483c498316175"
                })
                .when("/concept/d", {
                    templateUrl: templateUrl,
                    title: 'D',
                    bodyClass: "menu-d",
                    slides: [
                        '/assets/images/aspirational/D-Intuit-Customer-Problems-v4.jpg',
                        '/assets/images/aspirational/D-Intuit-Customer-Problems-v4-hover.jpg'
                    ]
                })
                .when("/concept/e", {
                    templateUrl: templateUrl,
                    title: 'E',
                    bodyClass: "menu-e",
                    slides: [
                        '/assets/images/aspirational/E-Intuit-ThoughtLeaderRevised_AF-06.jpg',
                        '/assets/images/aspirational/Aspirational-E.png'
                    ]
                }) 
                .when("/concept/f", {
                    templateUrl: "/apps/aspirational/views/iframe.html",
                    title: 'F',
                    bodyClass: "menu-f",
                    iframeSrc: "http://s.codepen.io/team/xdp/debug/a9415a24a128d2acbd8b2be664c0b308"
                })            
                .when("/concept/g", {
                    templateUrl: templateUrl,
                    title: 'G',
                    bodyClass: "menu-g",
                    slides: [
                        '/assets/images/aspirational/G-Intuit-EveryDay-v2-1.jpg'
                    ]
                })
                .when("/concept/h", {
                    templateUrl: templateUrl,
                    title: 'H',
                    bodyClass: "menu-h",
                    slides: [
                        '/assets/images/aspirational/H-Intuit-WhySimplify-v3.jpg'
                    ]
                })
                .when("/concept/i", {
                    templateUrl: templateUrl,
                    title: 'I',
                    bodyClass: "menu-i",
                    slides: [
                        '/assets/images/aspirational/I1-Intuit-HumantoHuman-v4a.jpg',
                        '/assets/images/aspirational/I2-Intuit-HumantoHuman-v4b.jpg',
                        '/assets/images/aspirational/Aspirational-I.png'
                    ]
                })                
                .otherwise({ 
                    redirectTo: "/" 
                });

        }])
        .run(['$rootScope', function ($rootScope) {
            $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
                var title = currentRoute.title || 'Home';

                $rootScope.title = 'Aspirational | Concept ' + title;
                $rootScope.bodyClass = currentRoute.bodyClass;
            });
        }]);
})();