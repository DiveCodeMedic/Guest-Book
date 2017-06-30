(function(){
    'use strict';

    angular
        .module('module')
        .factory('guestbookFactory', guestbookFactory)

    guestbookFactory.$inject = ['$http'];

    function guestbookFactory($http) {
        var service = {
            getMessages: getMessages,
            postMessage: postMessage
        };

        return service;

        function getMessages() { }

        function postMessage() { }
    }
})();