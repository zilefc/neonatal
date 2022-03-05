import express from 'express';
import { resolve } from 'path';

import './database';
import routes from './routes';

const app = express();

app.set('view engine', 'ejs');
app.set('views', resolve(__dirname, 'app', 'views'));

app.get('/', (request, response) => {
	return response.render('pages');
});

app.use(express.json());
app.use(routes);

export default app;
