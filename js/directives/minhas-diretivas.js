angular.module('minhasDiretivas', [])
    .directive('lista', function () {
        var ddo = {}

        ddo.restrict = "E";
        ddo.templateUrl = 'js/directives/lista.html'

        return ddo;
    });
