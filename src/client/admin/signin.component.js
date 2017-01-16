
angular.
    module('admin').
    component('signin', {
        templateUrl: 'admin/signin.template.html',
        controller: ['$http', 'authToken', '$location', 
            function SigninController($http, authToken, $location){
                let self = this;
                this.username = 'admin';
                this.password = 'admin';

                this.signin = () => {
                    self.errorMsg = '';
                    let req = { username: self.username, password: self.password };
                    $http.post('/api/login', req).then(signinSuccess, signinFail);
                };

                function signinSuccess(response){
                    authToken.isAuthenticated = true;
                    authToken.token = response.data.token;
                    $location.path('admin/game');
                }

                function signinFail(){
                    self.errorMsg = 'login failed';
                }
            }]
    });