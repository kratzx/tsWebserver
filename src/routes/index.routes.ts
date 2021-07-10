import e, { Router } from 'express';

const indexRouter: Router = e.Router();

indexRouter.get('/', (req, res) => {
  console.log('GET request on /');
  res.status(200).json('Index Ok');
});

export { indexRouter };