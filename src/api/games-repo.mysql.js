import {MySql} from './mysql';

export class GamesRepository{
    constructor(){
        this.sql = new MySql();
    }

    getGames(){
        let query = 'SELECT * FROM games';
        return this.sql.query(query);
    }

    addGame(game){
        let query = 'INSERT INTO games SET ?';
        return this.sql.query(query, game);
    }
}