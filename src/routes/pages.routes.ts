import { Router } from 'express';
import authMiddleware from '../middlewares/auth';

const routes = Router();

routes.use(authMiddleware);

routes.get('/', (request, response) => {
	return response.render('pages/home', { title: 'Home' });
});

export { routes as pageRoutes };
