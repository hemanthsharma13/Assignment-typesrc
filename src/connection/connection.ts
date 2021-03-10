import {createConnection} from 'typeorm';
import User from '../entity/User';
import Exercise from '../entity/Exercise';

export const connection = createConnection({

    type: "postgres",
    host: "localhost",
    port: 5432,
    username:'postgres',
    password: 'hemanth123',
    database: 'USeEX',

    entities: [ User ,Exercise]
,
   synchronize:true,
   logging: false
});
