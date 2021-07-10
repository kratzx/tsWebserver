import e from 'express';
import { indexRouter } from './routes';

export default class Server {

  app: e.Application
  port: number

  constructor( port = 8000 ) {
    this.app = e();
    this.port = port;
  }

  run() {    
    this.routes()
    this.app.listen( this.port, () => {
      console.log(`Server started at http://localhost:${ this.port }`)
    });
  }

  routes() {
    this.app.use('/', indexRouter);
  }
}
