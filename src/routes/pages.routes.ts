import { Router } from 'express';
import motherChildrenController from '../app/controllers/MotherChildrenController';

const routes = Router();

routes.get('/', (request, response) => {
	motherChildrenController().count(request, response);
});

export { routes as pageRoutes };
