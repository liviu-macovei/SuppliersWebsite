(function() {
    "use strict";

    angular
        .module("app")
        .factory("postDataFactory", postDataFactory);

    postDataFactory.$inject = ["$http"];

    function postDataFactory($http) {

        var urlBase = "http://localhost:49580/api/PostData";
        var vm = this;
       
        function getPostData() {
            if (vm.postData == null) {
                vm.postData = $http.get(urlBase);
            }
            return vm.postData;
        }

        function setDefaultPostData() {
            var transId = "711D9051K1201604180932185560000001",
                storeId = "9051",
                terminalId = "1",
                posOperation = "NEW_SCAN_TRANS",
                customerSessionId = "711D9051K1_20160418093218",
                gtid = "something; who knows?",
                currentPosTotal = "true";

            setPostData(transId, storeId, terminalId, posOperation, customerSessionId, gtid, currentPosTotal);
        }

        function setPostData(transId, storeId, terminalId, posOperation, customerSessionId, gtid, currentPOSTotal) {

            var params = $.param({
                "TransId": transId,
                "StoreId": storeId,
                "TerminalId": terminalId,
                "POSOperation": posOperation,
                "CustomerSessionId": customerSessionId,
                "GTID": gtid,
                "CurrentPOSTotal": currentPOSTotal
            });
            vm.postData = {
                "TransId": transId,
                "StoreId": storeId,
                "TerminalId": terminalId,
                "POSOperation": posOperation,
                "CustomerSessionId": customerSessionId,
                "GTID": gtid,
                "CurrentPOSTotal": currentPOSTotal
            };
          //  return $http.post(urlBase, params);
        };

        var service = {
            GetPostData: getPostData,
            SetPostData: setPostData,
            SetDefaultPostData: setDefaultPostData
        };

        return service;
    }
})();