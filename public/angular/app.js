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
            ram: $scope.ram.singleSelect,
            os: $scope.os.singleSelect
        };

        console.log(data);

        $http.post('user/registro', JSON.stringify(data)).then(function (res) {
            console.log(res.data);
            if(res.data){
                $window.location.href = 'juego.html';
            } else {
                $window.location.href = 'registro.html';
            }

        });
    }
});

app.controller('gustosCtrl', function ($window, $scope, $http) {
    $scope.gustar = function () {
        var s = 0;
        var e = 0;
        var si = 0;
        var d = 0;
        var c = 0;
        var a = 0;
        var r = 0;

        if($scope.shooter.singleSelect == 'Bueno') s = 1;
        if($scope.shooter.singleSelect == 'Malo') s = -1;
        if($scope.estrategia.singleSelect == 'Bueno') e = 1;
        if($scope.estrategia.singleSelect == 'Malo') e = -1;
        if($scope.simulacion.singleSelect == 'Bueno') si = 1;
        if($scope.simulacion.singleSelect == 'Malo') si = -1;
        if($scope.deporte.singleSelect == 'Bueno') d = 1;
        if($scope.deporte.singleSelect == 'Malo') d = -1;
        if($scope.carrera.singleSelect == 'Bueno') c = 1;
        if($scope.carrera.singleSelect == 'Malo') c = -1;
        if($scope.aventura.singleSelect == 'Bueno') a = 1;
        if($scope.aventura.singleSelect == 'Malo') a = -1;
        if($scope.rpg.singleSelect == 'Bueno') r = 1;
        if($scope.rpg.singleSelect == 'Malo') r = -1;

        var data = {
            s: s,
            e: e,
            si: si,
            d: d,
            c: c,
            a: a,
            r: r
        };

        $http.post('/user/gustos', JSON.stringify(data)).then(function (res) {
            if(res.data){
                $window.location.href = 'inicio.html';
            }
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