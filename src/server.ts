import express from 'express';

import './database';
import authMiddleware from './middlewares/auth';
import { childrenRoutes } from './routes/children.routes';
import { mothersRoutes } from './routes/mothers.routes';
import { sessionRoutes } from './routes/sessions.routes';
import { usersRoutes } from './routes/users.routes';

const app = express();
app.use(express.json());

app.use('/sessions', sessionRoutes);

app.use(authMiddleware);
app.use('/users', usersRoutes);
app.use('/mothers', mothersRoutes);
app.use('/children', childrenRoutes);

app.get('/', (request, response) => {
	return response.send('Hello');
});

app.listen(3333, () => console.log('Server running on 3333'));
