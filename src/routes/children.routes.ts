import { Router } from 'express';
import childrenController from '../app/controllers/ChildrenController';
import authMiddleware from '../middlewares/auth';

const routes = Router();

routes.get('/', async (request, response) => {
	await childrenController().list(request, response);
});

routes.get('/:id', async (request, response) => {
	await childrenController().showById(request, response);
});

routes.use(authMiddleware);
routes.post('/', async (request, response) => {
	await childrenController().create(request, response);
});

export { routes as childrenRoutes };
