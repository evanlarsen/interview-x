

export class GamesRepository{
    constructor(){
        this.id = 0;
        this.games = [
            {
                id: this.getId(),
                team: 'seminoles vs gators',
                score: '14-0'
            },
            {
                id: this.getId(),
                team: 'seminoles vs hurricanes',
                score: '14-0'
            },
            {
                id: this.getId(),
                team: 'seminoles vs crimson tide',
                score: '14-0'
            }
        ];
    }

    getId(){
        return ++this.id;
    }

    addGame(game){
        return new Promise((resolve, reject) => {
            var newGame = Object.assign({}, {id: this.getId()}, game);
            this.games.push(newGame);
            resolve();
        });
    }

    getGames(){
        return new Promise((resolve, reject) => {
            resolve(this.games);
        });
    }
}