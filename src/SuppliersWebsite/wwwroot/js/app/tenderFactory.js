(function() {
    "use strict";

    angular
        .module("app")
        .factory("tenderFactory", tenderFactory);

    tenderFactory.$inject = ["$http"];

    function tenderFactory($http) {


        var urlBase = "http://localhost:49580/api/Tenders";

        function getTenders() {
            return $http.get(urlBase);
        }

        function getTender(id) {
            return $http.get(urlBase + "/" + id);
        }

        function insertTender(tender) {
            return $http.post(urlBase, tender);
        };       

        function updateTender(tender) {
            return $http.put(urlBase + "/" + tender.ID, tender);
        };

        function deleteTender(id) {
            return $http.delete(urlBase + "/" + id);
        };

        var service = {
            GetTenders: getTenders,
            GetTender: getTender,
            InsertTender: insertTender,
            UpdateTender: updateTender,
            DeleteTender: deleteTender
        };

        return service;
    }
})();