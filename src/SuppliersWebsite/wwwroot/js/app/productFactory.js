(function() {
    "use strict";

    angular
        .module("app")
        .factory("productFactory", productFactory);

    productFactory.$inject = ["$http"];

    function productFactory($http) {


        var urlBase = "http://localhost:49580/api/Products";

        function getProducts() {
            return $http.get(urlBase);
        }

        function getProduct(id) {
            return $http.get(urlBase + "/" + id);
        }

        function insertProduct(product) {
            return $http.post(urlBase, product);
        };       

        function updateProduct(product) {
            return $http.put(urlBase + "/" + product.ID, product);
        };

        function deleteProduct(id) {
            return $http.delete(urlBase + "/" + id);
        };

        var service = {
            GetProducts: getProducts,
            GetProduct: getProduct,
            InsertProduct: insertProduct,
            UpdateProduct: updateProduct,
            DeleteProduct: deleteProduct
        };

        return service;
    }
})();