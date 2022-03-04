import { Router } from 'express';
import childrenController from '../app/controllers/ChildrenController';

const routes = Router();

routes.post('/', async (request, response) => {
	await childrenController().create(request, response);
});

routes.get('/', async (request, response) => {
	await childrenController().list(request, response);
});

routes.get('/:id', async (request, response) => {
	await childrenController().showById(request, response);
});

export { routes as childrenRoutes };
