(function() {
    "use strict";

    angular
        .module("app")
        .factory("supplierFactory", supplierFactory);

    supplierFactory.$inject = ["$http"];

    function supplierFactory($http) {
        var service = {
            getData: getData
        };

        function getData() {
            return $http.get("/api/people");
            
        }

        return service;
    }
})();