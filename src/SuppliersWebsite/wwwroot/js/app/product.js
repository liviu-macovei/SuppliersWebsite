(function() {
    "use strict";

    angular
        .module("app")
        .controller("Product", Product);

    Product.$inject = ["$location", "productFactory","postDataFactory"];

    function Product($location, productFactory, postDataFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = "product";

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

        vm.AddProduct = function addProduct(EAN) {
            window.external.AddCraAddTransaction(EAN);
            window.external.CraCalCompleteEvent();
            window.external.HideEvent2();
        };

        /* [
        { "EAN": "1", "Name": "One", "Price": "100$" },
        { "EAN": "2", "Name": "Two", "Price": "101$" },
        { "EAN": "3", "Name": "Three", "Price": "102$" },
        { "EAN": "4", "Name": "Four", "Price": "103$" },
        { "EAN": "5", "Name": "Five", "Price": "104$" },
        { "EAN": "6", "Name": "Six", "Price": "105$" },
        { "EAN": "7", "Name": "Seven", "Price": "106$" }
    ];*/
        activate();

        function activate() {}
    }
})();