import { Router } from 'express';
import sessionController from '../controllers/SessionController';

const routes = Router();

routes.post('/', (request, response) => {
	sessionController().create(request, response);
});

export { routes as sessionRoutes };
