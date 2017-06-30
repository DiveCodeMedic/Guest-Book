(function () {
    'use strict';

    angular
        .module('app')
        .controller('GuestbookController', GuestbookController);

    GuestbookController.$inject = ['$http'];

    function GuestbookController($http) {
        var vm = this;

        vm.addMessage = addMessage;

        ///////////////
        function addMessage() {
            $http
                .post('http://localhost:3000/message', {
        "message": vm.newMessage
    })
    .then(response => {
        alert('Holy Shit ....good job you added some stuff!');
    });
        }

    }
})();