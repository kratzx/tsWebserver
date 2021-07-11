import dotenv from 'dotenv';
import Server from './app';
import MongoAltas from './services/mongoAtlas';

const main = async () => {

  dotenv.config();
  
  const myDB = new MongoAltas();
  const myServer = new Server(Number(process.env.EXPRESS_PORT));
  
  await myDB.run();
  myServer.run();
};

main();