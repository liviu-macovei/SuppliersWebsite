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
        /*$locationProvider.html5Mode(true);*/
        var searchObject = $location.search();
        vm.searchObject = searchObject;
        //TODO once connected to the POS remove this
        setDefaultPostData();
        function setDefaultPostData() {
            postDataFactory.SetDefaultPostData();
            vm.postData = postDataFactory.GetPostData();
        }

        getPostData();

        function getPostData() {
            vm.postData = postDataFactory.GetPostData();
        }

        activate();

        function activate() {}
    }
})();