import {GamesController} from './games-controller';
import {GamesRepository} from './games-repo';
import {AuthController} from './auth-controller';
import bodyParser from 'body-parser';

export class Api{
    constructor(app){
        app.use(bodyParser.json());
        let gamesController = new GamesController(app, new GamesRepository());
        let authController = new AuthController(app);
    }
}