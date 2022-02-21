import express from 'express';

import { mothersRoutes } from './routes/mothers.routes';

const app = express();
app.use(express.json());

app.use('/mothers', mothersRoutes);

app.get('/', (request, response) => {
	return response.send('Hello');
});

app.listen(3333, () => console.log('Server running on 3333'));
