(function() {
    "use strict";

    angular
        .module("app")
        .controller("Tender", Tender);

    Tender.$inject = ["$location", "tenderFactory", "postDataFactory"];

    function Tender($location, tenderFactory, postDataFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = "tender";
        vm.selectedTenders = [];
        getTenders();

        function getTenders() {
            tenderFactory.GetTenders()
                .then(function(response) {
                        vm.tenders = response.data;
                    },
                    function(error) {
                        vm.status = "Unable to load customer data: " + error.message;
                    });
        }

        function getTenderForBarcode(barcode) {
            tenderFactory.GetTenderForBarcode(barcode)
                .then(function (response) {
                    var tender = response.data; /* getTender(searchObject.Barcode);*/
                    vm.AddTender(tender);
                },
                    function (error) {
                        vm.status = "Unable to load customer data: " + error.message;
                        vm.tenderFromBarcode = null;
                    });
        }
        

        vm.AddTender = function addTender(item) {
            /*
            If the tender can be added only once
            if (vm.selectedTenders.indexOf(item) == -1)
            */
            if (typeof item != "undefined")
                vm.selectedTenders.push(item);
            try {
         
            } catch (err) {
            }
        };
     
        scanForBarcode();

        function scanForBarcode() {
            var searchObject = $location.search();
            var pData = {};
            //just to make sure that only the needed parameters are taken

            if (searchObject.Barcode != null) {
                var barcode = searchObject.Barcode;
                getTenderForBarcode(barcode);
                pData.TransId = searchObject.TransId;
                pData.StoreId = searchObject.StoreId;
                pData.TerminalId = searchObject.TerminalId;
                pData.POSOperation = searchObject.POSOperation;
                pData.CustomerSessionId = searchObject.CustomerSessionId;
                postDataFactory.postData = pData;
                vm.postData = pData;
            }

        }

        vm.RemoveTender = function removeTender(item) {
            if (vm.selectedTenders.indexOf(item) > -1)
                vm.selectedTenders.pop(item);        
        };

        vm.PaymentWasDone = function paymentWasDone() {            
        };

        vm.SomethingFailed = function somethingFailed() {
            
        };

        vm.CancelTransaction = function cancelTransaction() {
            vm.selectedTenders = [];
        };

        activate();

        function activate() {
        }
    }
})();