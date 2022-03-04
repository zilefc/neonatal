import { Router } from 'express';
import childrenController from '../app/controllers/ChildrenController';

const routes = Router();

routes.post('/', async (request, response) => {
	await childrenController().create(request, response);
});

export { routes as childrenRoutes };
