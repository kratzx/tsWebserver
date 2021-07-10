import e from 'express';
import request from 'supertest';
import { indexRouter, productsRouter, usersRouter } from '../src/routes';
 
const app = e();
app.use("/", indexRouter); 
app.use("/users", usersRouter);
app.use("/products", productsRouter);

describe('API Rest test', () => {
  describe('Home', () => {
    test("GET / - success", async () => {
      const { status, body } = await request(app).get("/"); 
      expect(status).toEqual(200);
    });
  })
  describe('Products', () => {
    test("GET /products - success", async () => {
      const { status } = await request(app).get("/products"); 
      expect(status).toEqual(200);
    });
  })
  describe('Users', () => {
    test("GET /users - success", async () => {
      const { status, body } = await request(app).get("/users"); 
      expect(status).toEqual(200);
    });
  }) 
});