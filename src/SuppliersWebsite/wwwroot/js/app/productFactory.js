(function() {
    "use strict";

    angular
        .module("app")
        .factory("productFactory", productFactory);

    productFactory.$inject = ["$http"];

    function productFactory($http) {


        var urlBase = "http://supplierswebapi.azurewebsites.net/api/Products";

        function getProducts() {
            return $http.get(urlBase);
        }

        function getProduct(id) {
            return $http.get(urlBase + "/" + id);
        }

        function insertProduct(product) {
         return $http({
                method: 'POST',
                url: urlBase,
                data: product,
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
         /*   return $http.post(urlBase, product);*/
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