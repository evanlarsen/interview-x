
describe('admin', function(){
    beforeEach(module('admin'));

    describe('AddGameController', function(){
        var location, $httpBackend, ctrl;

        beforeEach(inject(function($componentController, _$httpBackend_, $location){
            $httpBackend = _$httpBackend_;
            $httpBackend.expectPOST('/api/login')
                .respond({ token: 'secret-token'});
            ctrl = $componentController('signin');
            location = $location;
        }));

        it('should change location when authenticated', inject(function(){
            spyOn(location, 'path');
            ctrl.signin();
            $httpBackend.flush();
            expect(location.path).toHaveBeenCalledWith('admin/game');
        }));

        it('should set auth token when authenticated', inject(function(authToken){
            ctrl.signin();
            $httpBackend.flush();
            expect(authToken.isAuthenticated).toBe(true);
            expect(authToken.token).toBe('secret-token');
        }));
    });
});