import dotenv from 'dotenv';
import Server from './app';
import MongoAltas from './services/mongoAtlas';

dotenv.config();

const myDB = new MongoAltas();
const myServer = new Server(Number(process.env.EXPRESS_PORT));

myDB.run();
myServer.run();