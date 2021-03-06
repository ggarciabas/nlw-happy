import express from 'express';
import './database/connection';
import routes from './routes';
import path from 'path';
import errorHandler from './errors/handler';
import cors from 'cors';

const app = express();

app.use(cors()) // libera o acesso para diferentes domínios
app.use(express.json()) /* para que o express entenda o JSON default */
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))) // para publicar uma pasta de forma estática 
app.use(errorHandler);

app.listen(process.env.PORT || 8080)
