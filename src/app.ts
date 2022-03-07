import express from 'express';
import { resolve } from 'path';

import './database';
import routes from './routes';

const app = express();
app.use('/views', express.static(resolve(__dirname, 'app', 'views')));
app.set('view engine', 'ejs');
app.set('views', resolve(__dirname, 'app', 'views'));

app.use(express.json());
app.use(routes);

export default app;
