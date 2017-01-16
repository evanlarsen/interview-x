
import {GamesRepository} from './games-repo.inmemory';

describe('gamesRepo', function(){
    it('getGames should return 3 `games`', function(){
        var repo = new GamesRepository();
        var games = repo.getGames();
        expect(games.length).toEqual(3);
    });
});