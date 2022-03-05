import { Router } from 'express';
import motherController from '../app/controllers/MotherController';
import motherChildrenController from '../app/controllers/MotherChildrenController';

const routes = Router();

routes.post('/', async (request, response) => {
	await motherController().create(request, response);
});

routes.get('/', async (request, response) => {
	await motherController().list(request, response);
});

routes.get('/:id', async (request, response) => {
	await motherController().showById(request, response);
});

routes.get('/:id/children', async (request, response) => {
	await motherChildrenController().list(request, response);
});

export { routes as mothersRoutes };
