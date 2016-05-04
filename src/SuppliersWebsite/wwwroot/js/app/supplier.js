(function() {
    "use strict";

    angular
        .module("app")
        .controller("Supplier", Supplier);

    Supplier.$inject = ["$location", "supplierFactory"];  


    function Supplier($location, supplierFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = "supplier";    

        activate();

        function activate() {
            supplierFactory.GetSupplier(1)
               .then(function (response) {
                   vm.currentSupplier = response.data;
               },
                   function (error) {
                       vm.status = "Unable to load customer data: " + error.message;
                   });
        }
    }
})();