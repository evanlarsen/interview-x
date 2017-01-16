import httpStatusCodes from './http-status-codes';

export class AuthController{
    constructor(app){
        this.app = app;
        app.post('/api/login', this.postLogin);
    }

    postLogin(req, res){
        if (req.body.username === 'admin' && req.body.password === 'admin'){
            res.json({ token: 'secret-token'});
        } else {
            res.status(httpStatusCodes.unauthorized).end();
        }
    }
}