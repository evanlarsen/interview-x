
angular.
    module('soccerApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider){
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/games', {
                    template: '<game-list></game-list>'
                }).
                when('/admin/signin', {
                    template: '<signin></signin>'
                }).
                when('/admin/game', {
                    template: '<add-game></add-game>'
                }).
                otherwise('/games');
        }
    ]);