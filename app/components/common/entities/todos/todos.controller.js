(function() {
    'use strict';

    angular
        .module('rw.entities.todos')
        .controller('TodosController', TodosController);

    TodosController.$inject = ['todosService'];

    /* @ngInject */
    function TodosController(todosService) {
        var vm = this;

        activate();

        function activate() {
          todosService.getTodos()
            .then(function(response) {
              console.log(response);
            });
        }
    }
})();
