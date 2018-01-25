var app = angular.module('App', []);


app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.player = '';
    $scope.players = [];

    $scope.addPlayer = function () {
        if ($scope.players.indexOf($scope.player) > -1 || !$scope.player) {
            return;
        }
        $scope.players.push($scope.player);
        $scope.player = '';
    };

    $scope.removePlayer = function (index) {
        $scope.players.splice(index, 1);
    };

    $scope.playersRandomize = function () {

        $scope.players.length && $scope.players.sort(function (a, b) {
            return (Math.random() - 0.5) < 0;
        });



        console.log($scope.players);
    }
}]);