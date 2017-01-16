import mysql from 'mysql';
import * as project from '../../project/project.json';

export class MySql{
    constructor(){
        this.pool = mysql.createPool({
            host: project.aws.mysql.server,
            port: project.aws.mysql.port,
            user: project.aws.mysql.username,
            password: project.aws.mysql.password,
            database: project.aws.mysql.database,
            connectionLimit: project.aws.mysql.connectionLimit
        });
    }

    query(sql, ...values){
        var self = this;
        return new Promise((resolve, reject) => {
            this._getConnection().then(connection => {
                self._executeQuery(connection, sql, values, resolve, reject);
            });
        });
    }

    _getConnection(){
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) =>{
                if (err){
                    console.error('db error getting connection', err);
                    reject();
                    return;
                }
                console.log(`db connected as id ${connection.threadId}`);
                resolve(connection);
            });
        });
    }

    _executeQuery(connection, sql, values, resolve, reject){
        console.log('db sending query', sql, values);
        connection.query(sql, values, (error, results, fields) => {
            if (error){
                reject(error);
                return;
            }
            resolve(results);
            connection.release();
        });
    }
}