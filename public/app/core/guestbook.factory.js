(function(){
    'use strict';

    angular
        .module('app')
        .factory('guestbookFactory', guestbookFactory)


    guestbookFactory.$inject = ['$http'];

    function guestbookFactory($http) {
        var service = {
            getMessage:getMessage,
            postMessage:postMessage
        };

        return service;

        function getMessage() { }

        function postMessage() { }
    }
})();