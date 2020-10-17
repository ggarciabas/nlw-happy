import express from 'express';
import './database/connection';
import routes from './routes';
import path from 'path';

const app = express();

app.use(express.json()) /* para que o express entenda o JSON default */
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))) // para publicar uma pasta de forma estática 

app.listen(3333);
