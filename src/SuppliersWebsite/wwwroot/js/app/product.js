(function() {
    "use strict";

    angular
        .module("app")
        .controller("Product", Product);

    Product.$inject = ["$location", "productFactory", "postDataFactory"];

    function Product($location, productFactory, postDataFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = "product";
        vm.productToSave = {};
        vm.selectedProducts = [];
        getProducts();

        function getProducts() {
            productFactory.GetProducts()
                .then(function(response) {
                        vm.products = response.data;
                    },
                    function(error) {
                        vm.status = "Unable to load customer data: " + error.message;
                    });
        }

        vm.Save = function () {
            //TODO propagate to db
            vm.products.push(vm.productToSave);
        };

        vm.SelectProduct = function selectProduct(item) {
            /*
            If the product can be added only once
            if (vm.selectedProducts.indexOf(item) == -1)
            */
            vm.selectedProducts.push(item);
        };

        vm.RemoveProduct = function removeProduct(item) {
            if (vm.selectedProducts.indexOf(item) > -1)
                vm.selectedProducts.pop(item);
        };

        vm.PaymentWasDone = function paymentWasDone() {
        };

        vm.SomethingFailed = function somethingFailed() {
        };

        vm.CancelTransaction = function cancelTransaction() {
            vm.selectedProducts = [];
        };

        activate();

        function activate() {
        }
    }
})();