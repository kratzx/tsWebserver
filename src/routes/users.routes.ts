import e, { Router } from 'express';
import { defaultController } from '../controllers/defaultController';

const usersRouter: Router = e.Router();

usersRouter.get('/', defaultController);

export { usersRouter };