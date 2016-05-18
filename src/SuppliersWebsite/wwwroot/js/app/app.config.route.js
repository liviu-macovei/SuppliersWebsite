(function() {
    "use strict";

    angular
        .module("app")
        .config([
            "$locationProvider", function($locationProvider) {
                $locationProvider.html5Mode(true);
            }
        ]).config([
            "$stateProvider", function ($stateProvider) {
                $stateProvider
                    .state("addProduct", {
                        url: "/",
                        views: {
                            "viewAdd": {
                                templateUrl: "/partials/addProduct.html"
                            }
                        }
                    });
            }
        ]);
})();