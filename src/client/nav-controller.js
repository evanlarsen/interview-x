angular.module('soccerApp')
    .controller('NavController', ['$scope', '$location',
        function($scope, $location){
            $scope.$location = $location;
        }]);