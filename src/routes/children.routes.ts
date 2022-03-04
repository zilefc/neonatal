import { Router } from 'express';

const routes = Router();

routes.post('/', (request, response) => {
	return response.send();
});

export { routes as childrenRoutes };
