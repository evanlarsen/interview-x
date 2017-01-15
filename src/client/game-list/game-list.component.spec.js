
describe('gameList', function(){

    beforeEach(module('gameList'));

    describe('GameListController', function(){
        var $httpBackend, ctrl;

        beforeEach(inject(function($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('api/games')
                .respond([{team: 'fsu vs gators', score: '14-0'}]);

            ctrl = $componentController('gameList');
        }));

        it('should create a `games` model with 1 games fetched with `$http`', inject(function($componentController) {
            expect(ctrl.games).toBeUndefined();
            $httpBackend.flush();
            expect(ctrl.games.length).toBe(1);
        }));
    });
});