import {GamesRepository} from './games-repo';

export class GamesController {
    constructor(app){
        this.app = app;
        this.repo = new GamesRepository();
        app.get('/api/games', this.getGames);
    }

    getGames(req, res) {
        let games = this.repo.getGames();
        res.send(games);
    }
}