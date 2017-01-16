
import {GamesRepository} from './games-repo.inmemory';

describe('gamesRepo', function(){
    it('getGames should return 3 `games`', function(done){
        var repo = new GamesRepository();

        var testGames = function(games){
            expect(games.length).toEqual(3);
            done();
        };

        var failTest = function(err){
            expect(err).toBeUndefined();
            done();
        };

        repo.getGames()
            .then(testGames)
            .catch(failTest);
    });
});