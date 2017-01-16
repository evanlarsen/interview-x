import {GamesController} from './games-controller';
import * as inmemory from './games-repo.inmemory';
import * as sql from './games-repo.mysql';
import {AuthController} from './auth-controller';
import bodyParser from 'body-parser';

export class Api{
    constructor(app){
        app.use(bodyParser.json());
        //let gamesController = new GamesController(app, new inmemory.GamesRepository());
        let gamesController = new GamesController(app, new sql.GamesRepository());
        let authController = new AuthController(app);
    }
}