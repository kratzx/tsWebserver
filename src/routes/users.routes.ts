import e, { Router } from 'express';
import { defaultController } from '../controllers/';

const usersRouter: Router = e.Router();

usersRouter.get('/', defaultController);

export { usersRouter };