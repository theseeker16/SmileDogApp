/**
 * Created by jgm16 on 03/11/2017.
 */

import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middleware';

const app = express();



dbConfig();

/**
 * Middlewares
 */
middlewaresConfig(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err =>{
    if(err){
        console.error(err);
    }{
        console.log('App listen to port '+ PORT);
    }
})