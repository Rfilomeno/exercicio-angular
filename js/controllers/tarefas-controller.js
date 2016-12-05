angular.module('tarefas').controller('TarefasController', function ($scope) {
    $scope.titulo = {
        titulo: 'Lista de Tarefas'

    };
    $scope.tarefas = [
        {
            item: 'Tarefa bla',
            concluido: false
    },
        {
            item: 'bla bla bla',
            concluido: true
    }
    ];




    // -- fim do controller -- //
});
