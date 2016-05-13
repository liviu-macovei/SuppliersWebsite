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

        vm.AddProduct = function addProduct(item) {
            /*
            If the product can be added only once
            if (vm.selectedProducts.indexOf(item) == -1)
            */
            vm.selectedProducts.push(item);
            window.external.AddCraAddTransaction(item.EAN);
            window.external.CraCalCompleteEvent();
            window.external.AddCraPrintReceipt(postDataFactory.postData.TransId, "COMMIT_ERROR", "commit error receipt");
            window.external.HideEvent2();
        };

        vm.RemoveProduct = function removeProduct(item) {
            if (vm.selectedProducts.indexOf(item) > -1)
                vm.selectedProducts.pop(item);
            window.external.AddCraCancelResult(postDataFactory.postData.TransId, "IMMEDIATE", "True");
        };

        vm.PaymentWasDone = function paymentWasDone() {
            window.external.AddCraPrintReceipt(postDataFactory.postData.TransId,
                "IMMEDIATE",
                "text to print on the receipt");
        };

        vm.SomethingFailed = function somethingFailed() {
            window.external.AddCraPrintReceipt(postDataFactory.postData
                .TransId,
                "COMMIT_ERROR",
                "commit error receipt");
        };

        vm.CancelTransaction = function cancelTransaction() {
            vm.selectedProducts = [];
        };

        activate();

        function activate() {
        }
    }
})();