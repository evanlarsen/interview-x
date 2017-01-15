
angular.
    module('gameList').
    component('gameList', {
        templateUrl: 'game-list/game-list.template.html',
        controller: function GameListController(){
            this.games = [
                {
                    team: 'seminoles vs gators',
                    score: '14-0'
                },
                {
                    team: 'seminoles vs gators',
                    score: '14-0'
                },
                {
                    team: 'seminoles vs gators',
                    score: '14-0'
                }
            ];
        }
    });