import { Router } from 'express';
import userController from '../controllers/UserController';

const routes = Router();

routes.post('/', async (request, response) => {
	await userController().create(request, response);
});

export { routes as usersRoutes };
