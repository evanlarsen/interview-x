
describe('gameList', function(){

    beforeEach(module('gameList'));

    describe('GameListController', function(){
        it('should create a `games` model with 3 games', inject(function($componentController) {
            var ctrl = $componentController('gameList');
            expect(ctrl.games.length).toBe(3);
        }));
    });
});