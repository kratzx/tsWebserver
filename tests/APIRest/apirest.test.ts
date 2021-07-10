import e from 'express';
import homeTests from './home/home.apirest';
import productsTests from './products/products.apirest';
import usersTests from './users/users.apirest';
import { indexRouter } from '../../src/routes';
 
const app = e();
app.use("/", indexRouter); 

describe('API Rest test', () => {
  homeTests(app);
  productsTests(app);
  usersTests(app);  
});