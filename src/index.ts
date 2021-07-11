import { dotEnv } from './config/dotEnv';
import Server from './app';
import MongoAltas from './services/mongoAtlas';

const main = async () => {

  const myDB = new MongoAltas();
  const myServer = new Server(dotEnv.port);
  
  await myDB.run();
  myServer.run();
};

main();