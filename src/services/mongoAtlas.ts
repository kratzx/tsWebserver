import mongoose, { Connection } from 'mongoose';
import { dotEnv } from '../config/dotEnv';

export default class MongoAltas {

  uri: string | undefined
  db: Connection | undefined

  constructor() {
    this.uri = dotEnv.atlasString;
  }

  async run() {
    try {
      if (this.uri) {
        await mongoose.connect(this.uri, {
          useNewUrlParser: true, 
          useUnifiedTopology: true
        });
        this.db = mongoose.connection;
        console.log('Database connection success!')
      } else throw new Error('Undefined URI');
    } catch(e) {
      console.log('Mongoose: ', e);
    }
  }
}
