import { Router } from 'express';
import searchController from '../app/controllers/SearchController';

const routes = Router();

routes.get('/mothers', (request, response) => {
	searchController().searchMothers(request, response);
});

export { routes as searchRoutes };
