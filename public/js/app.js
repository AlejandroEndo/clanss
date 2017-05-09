/**
 * Created by Endo on 8/05/2017.
 */

var app = angular.module('myApp', []);

app.controller('myCtrl', function ($window, $scope, $http) {
    $http.get('/filtro/data').then(function (res) {
        $scope.variable = res;
    });
    
    $scope.sendInfo = function () {
        var data = {
            accion : $scope.accion,
            shooter : $scope.shooter,
            estrategia : $scope.estrategia,
            simulacion : $scope.simulacion,
            deporte : $scope.deporte,
            carrera : $scope.carrera,
            aventura : $scope.aventura,
            rol : $scope.rol,
            rpg : $scope.rpg,
            id_usuario: "yo"
        };

        console.log($scope.accion);

        $http.post('filtro/informacion', JSON.stringify(data)).then(function (res) {
            $scope.data = res.data;
        });
    };
});