(function() {
    "use strict";

    angular
        .module("app")
        .controller("Supplier", Supplier);

    Supplier.$inject = ["$location"];

    function Supplier($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = "supplier";
        vm.products = [
            { "EAN": "1", "Name": "One", "Price": "100$" },
            { "EAN": "2", "Name": "Two", "Price": "101$" },
            { "EAN": "3", "Name": "Three", "Price": "102$" },
            { "EAN": "4", "Name": "Four", "Price": "103$" },
            { "EAN": "5", "Name": "Five", "Price": "104$" },
            { "EAN": "6", "Name": "Six", "Price": "105$" },
            { "EAN": "7", "Name": "Seven", "Price": "106$" }
        ];
        activate();

        function activate() {}
    }
})();