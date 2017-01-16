import httpStatusCodes from './http-status-codes';

export class GamesController {
    constructor(app, repo){
        this.app = app;
        app.get('/api/games', this.getGames(repo));
        app.post('/api/game', this.postGame(repo));
    }

    getGames(repo){
        return (req, res) => {
            repo.getGames().then(games => {
                res.send(games);    
            });
        };
    }

    postGame(repo){
        return (req, res) => {
            if (!req.headers.authorization && req.headers.authorization !== 'secret-token'){
                return res.status(httpStatusCodes.unauthorized).end();
            }
            repo.addGame(req.body).then(_ => {
                res.send('ok');
            }).catch(_ => {
                res.status(httpStatusCodes.badRequest).send('failed to add game');
            });
        };
    }
}