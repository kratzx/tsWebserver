import request from 'supertest';
import e from 'express'

const homeTests = (app: e.Application) => {
  return (
    describe('Index', () => {
      test("GET / - success", async () => {
        const { status } = await request(app).get("/"); 
        expect(status).toEqual(200);
     });
    })
  );
}

export default homeTests;
