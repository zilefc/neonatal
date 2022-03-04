import express from 'express';

import './database';
import routes from './routes';

const app = express();
app.use(express.json());

app.use(routes);

app.get('/', (request, response) => {
	return response.send('Hello');
});

app.listen(3333, () => console.log('Server running on 3333'));
