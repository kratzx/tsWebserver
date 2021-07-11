import e from 'express';
import { urlLogger } from './middleware/urlLogger';
import { indexRouter, productsRouter, usersRouter } from './routes';

export default class Server {

  app: e.Application
  port: number

  constructor( port = 8000 ) {
    this.app = e();
    this.port = port;
  }

  run() {    
    this.middleware();
    this.routes();
    this.app.listen( this.port, () => {
      console.log(`Server started at http://localhost:${ this.port }`)
    });
  }

  middleware() {
    this.app.use(urlLogger);
  }

  routes() {
    this.app.use('/', indexRouter);
    this.app.use('/users', usersRouter);
    this.app.use('/products', productsRouter);
  }
}
