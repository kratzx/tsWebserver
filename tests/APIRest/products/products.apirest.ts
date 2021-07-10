import request from 'supertest';
import e from 'express'

const productsTests = (app: e.Application) => {
  return (
    describe('Products', () => {
      test("GET /products - success", async () => {
        const { status } = await request(app).get("/products"); 
        expect(status).toEqual(200);
      });
    })
  );
}

export default productsTests;