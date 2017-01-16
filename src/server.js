
import express from 'express';
import path from 'path';
import {Api} from './api/main';

import * as project from '../project/project.json';

let app = express();
let router = express.Router();

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.set('port', project.server.port);

let server = app.listen(app.get('port'));

new Api(app);