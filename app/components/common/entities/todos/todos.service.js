(function() {
    'use strict';

    angular
        .module('rw.entities.todos')
        .factory('todosService', todosService);

    todosService.$inject = ['restService'];

    /* @ngInject */
    function todosService(restService) {
        var service = {
            getTodos: getTodos
        };

        return service;

        function getTodos() {
          return restService.get('/todos');
        }
    }
})();
