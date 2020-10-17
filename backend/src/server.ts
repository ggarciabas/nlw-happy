import express from 'express';
import './database/connection';
import OrphanagesController from './controllers/OrphanagesController';

const app = express();
app.use(express.json()) /* para que o express entenda o JSON default */

app.post('/orphanages', OrphanagesController.create)

app.listen(3333);
