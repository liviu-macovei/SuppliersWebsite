(function() {
    "use strict";

    angular
        .module("app")
        .factory("supplierFactory", supplierFactory);

    supplierFactory.$inject = ["$http"];

    function supplierFactory($http) {

        var urlBase = "http://supplierswebapi.azurewebsites.net/api/suppliers";

        function getSuppliers() {
            return $http.get(urlBase);
        }

        function getSupplier(id) {
            return $http.get(urlBase + "/" + id);
        }

        function insertSupplier(supplier) {
            return $http.post(urlBase, supplier);
        };

        function updateSupplier(supplier) {
            return $http.put(urlBase + "/" + supplier.ID, supplier);
        };

        function deleteSupplier(id) {
            return $http.delete(urlBase + "/" + id);
        };

        var service = {
            GetSuppliers: getSuppliers,
            GetSupplier: getSupplier,
            InsertSupplier: insertSupplier,
            UpdateSupplier: updateSupplier,
            DeleteSupplier: deleteSupplier
        };

        return service;
    }
})();