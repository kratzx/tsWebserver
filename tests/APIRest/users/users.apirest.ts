import request from 'supertest';
import e from 'express'

const usersTests = (app: e.Application) => {
  return (
    describe('Users', () => {
      test("GET /users - success", async () => {
        const { status } = await request(app).get("/users"); 
        expect(status).toEqual(200);
      });
    })
  );
}

export default usersTests;