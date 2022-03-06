import { Router } from 'express';
import userController from '../app/controllers/UserController';
import authMiddleware from '../middlewares/auth';

const routes = Router();

routes.use(authMiddleware);
routes.post('/', async (request, response) => {
	await userController().create(request, response);
});

export { routes as usersRoutes };
