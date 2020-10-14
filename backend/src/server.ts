import express from 'express';
import './database/connection';
import {getRepository} from 'typeorm';
import Orphanege from './models/Orphanage';

const app = express();
app.use(express.json()) /* para que o express entenda o JSON default */

app.post('/orphanages', async (request, response) => {
    const {name, latitude, longitude, about, instructions, opening_hours, open_on_weekends} = request.body;

    const orphanagesRepository = getRepository(Orphanege);

    const orphanage = orphanagesRepository.create({name, latitude, longitude, about, instructions, opening_hours, open_on_weekends});

    await orphanagesRepository.save(orphanage); // salva no banco

    return response.status(201).json(orphanage); // 201 - algo foi criado
})

app.listen(3333);
