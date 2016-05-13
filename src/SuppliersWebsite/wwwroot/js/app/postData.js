(function() {
    "use strict";

    angular
        .module("app")
        .controller("PostData", PostData);

    PostData.$inject = ["$location", "postDataFactory"];

    function PostData($location, postDataFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = "postData";

        getPostData();

        function getPostData() {
            var searchObject = $location.search();
            var pData = {};
            //just to make sure that only the needed parameters are taken
            pData.TransId = searchObject.TransId;
            pData.StoreId = searchObject.StoreId;
            pData.TerminalId = searchObject.TerminalId;
            pData.POSOperation = searchObject.POSOperation;
            pData.CustomerSessionId = searchObject.CustomerSessionId;
            pData.GTID = searchObject.GTID;
            pData.CurrentPOSTotal = searchObject.CurrentPOSTotal;
            postDataFactory.postData = pData;
            vm.postData = pData;
        }

        vm.setDefaultPostData = function setDefaultPostData() {
            postDataFactory.SetDefaultPostData();
            /*vm.postData = postDataFactory.GetPostData();*/
        };

        function getPostDataFromAPI() {
            vm.postData = postDataFactory.GetPostData();
        }

        activate();

        function activate() {}
    }
})();