describe('admin', function(){

    beforeEach(module('admin'));

    describe('AddGameController', function(){
        var $httpBackend, ctrl, location;

        beforeEach(inject(function($componentController, _$httpBackend_, $location){
            $httpBackend = _$httpBackend_;
            $httpBackend.expectPOST('/api/game')
                  .respond('success');
            
            ctrl = $componentController('addGame');
            location = $location;
        }));

        it('should change location when a game has been added', inject(function(){
            spyOn(location, 'path');
            ctrl.addGame();
            $httpBackend.flush();
            expect(location.path).toHaveBeenCalledWith('games');
        }));
    });
});