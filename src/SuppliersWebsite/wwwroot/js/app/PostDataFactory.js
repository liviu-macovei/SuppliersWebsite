(function() {
    "use strict";

    angular
        .module("app")
        .factory("postDataFactory", postDataFactory);

    postDataFactory.$inject = ["$http"];

    function postDataFactory($http) {

        var urlBase = "http://supplierswebapi.azurewebsites.net/api/PostData";
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
                gtid = "something; who knowsa?",
                currentPosTotal = "true";

            setPostData(transId, storeId, terminalId, posOperation, customerSessionId, gtid, currentPosTotal);
        }

        function setPostData(transId, storeId, terminalId, posOperation, customerSessionId, gtid, currentPOSTotal) {

            var params = {
                "TransId": transId,
                "StoreId": storeId,
                "TerminalId": terminalId,
                "POSOperation": posOperation,
                "CustomerSessionId": customerSessionId,
                "GTID": gtid,
                "CurrentPOSTotal": currentPOSTotal
            };
            vm.postData = {
                "TransId": transId,
                "StoreId": storeId,
                "TerminalId": terminalId,
                "POSOperation": posOperation,
                "CustomerSessionId": customerSessionId,
                "GTID": gtid,
                "CurrentPOSTotal": currentPOSTotal
            };
         /*   $http({
                method: 'POST',
                url: urlBase,
                data: params,
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
            });*/



            //THIS IS NOT POSSIBLE 


            //TODO: redirect not working because chrome breaks: 
            /*XMLHttpRequest cannot load http://supplierswebapi.azurewebsites.net/api/PostData.
            The request was redirected to 'http://localhost:14436/Home/Index?TransId=711D9051K120160418093218556000000…K1_20160418093218&GTID=something%3B%20who%20knowsa%3F&CurrentPOSTotal=true',
            which is disallowed for cross-origin requests that require preflight.*/
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