import { Router } from 'express';
import userController from '../controllers/UserController';

const routes = Router();

routes.post('/', (request, response) => {
	userController().create(request, response);
});

export { routes as usersRoutes };
