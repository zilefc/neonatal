import { Router } from 'express';
import motherController from '../controllers/MotherController';

const routes = Router();

routes.post('/', async (request, response) => {
	await motherController().create(request, response);
});

export { routes as mothersRoutes };
