import { Router } from 'express';
import authMiddleware from '../middlewares/auth';
import { childrenRoutes } from './children.routes';
import { mothersRoutes } from './mothers.routes';
import { sessionRoutes } from './sessions.routes';
import { usersRoutes } from './users.routes';

const routes = Router();

routes.use('/sessions', sessionRoutes);

routes.use(authMiddleware);
routes.use('/users', usersRoutes);
routes.use('/mothers', mothersRoutes);
routes.use('/children', childrenRoutes);

export default routes;
