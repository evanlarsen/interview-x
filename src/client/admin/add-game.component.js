angular.
    module('admin').
    component('addGame', {
        templateUrl: 'admin/add-game.template.html',
        controller: ['$http', 'authToken', '$location',
            function AddGameController($http, authToken, $location){
                let self = this;
                this.date = new Date();
                this.errorMsg = '';

                if (!authToken.isAuthenticated){
                    $location.path('/admin/signin');
                }

                this.addGame = () => {
                    self.errorMsg = '';
                    let data = { team: self.team, score: self.score, date: self.date };
                    let req = {
                        method: 'POST',
                        url: '/api/game',
                        headers: {
                            'Authorization': authToken.token,
                            'Content-Type': 'application/json'
                        },
                        data: data
                    };
                    $http(req).then(addGameSuccess, addGameFail);
                };

                function addGameSuccess(response){
                    $location.path('games');
                }

                function addGameFail(){
                    self.errorMsg = 'Whoops, something went wrong when trying to add a game.';
                }
            }]
    });