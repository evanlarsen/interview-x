
angular.
    module('gameList').
    component('gameList', {
        templateUrl: 'game-list/game-list.template.html',
        controller: ['$http', function GameListController($http){
            var self = this;
            $http.get('api/games').then(response => {
                self.games = response.data;
            });
        }]
    });