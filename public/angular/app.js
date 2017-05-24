/**
 * Created by Endo on 8/05/2017.
 */

var app = angular.module('myApp', []);

app.controller('loginCtrl', function ($window, $scope, $http) {
    $scope.login = function () {
        var data = {
            nick : $scope.nick,
            pass: $scope.pass
        };

        console.log(data);

        $http.post('/user/login', JSON.stringify(data)).then(function (res) {
            console.log(res);
            $window.location.href = '/inicio.html';
        });
    };
});

app.controller('registroCtrl', function ($window, $scope, $http) {

    $scope.registrar = function () {
        var data = {
            nick: $scope.nick,
            name: $scope.name,
            mail: $scope.mail,
            pass: $scope.pass,
            os: $scope.os.singleSelect,
            ram: $scope.ram.singleSelect
        };

        console.log(data);

        $http.post('user/registro', JSON.stringify(data)).then(function (res) {
            console.log(res);
            //$window.location.href = 'computador.html';
        });
    }
});

app.controller('myCtrl', function ($window, $scope, $http) {
    $http.get('/filtro/data').then(function (res) {
        $scope.variable = res;
    });
    
    $scope.sendInfo = function () {
        var data = {
            shooter : $scope.shooter,
            estrategia : $scope.estrategia,
            simulacion : $scope.simulacion,
            deporte : $scope.deporte,
            carrera : $scope.carrera,
            aventura : $scope.aventura,
            rpg : $scope.rpg,
            id_usuario: "yo"
        };

        console.log($scope.accion);

        $http.post('filtro/informacion', JSON.stringify(data)).then(function (res) {
            $scope.data = res.data;
        });
    };

    $scope.get_clan = function () {
        $http.get('filtro/get_clan').then(function (res) {
            $http.post('filtro/recomendar', JSON.stringify(res.data)).then(function (res) {
                $scope.data = res.data;
            })
        });
    };
});