import { Router } from 'express';
import sessionController from '../app/controllers/SessionController';

const routes = Router();

routes.post('/', async (request, response) => {
	await sessionController().create(request, response);
});

routes.get('/', (request, response) => {
	return response.render('pages/login', { title: 'Login' });
});

export { routes as sessionRoutes };
