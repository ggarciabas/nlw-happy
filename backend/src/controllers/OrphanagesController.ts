import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Orphanege from '../models/Orphanage';

export default {
    async index (request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanege);

        const orphanages = await orphanagesRepository.find()

        return response.json(orphanages);
    },
    async show (request: Request, response: Response) {
        const {id} = request.params
        const orphanagesRepository = getRepository(Orphanege);
        const orphanage = await orphanagesRepository.findOneOrFail(id)

        return response.json(orphanage);
    },

    async create (request: Request, response: Response) {
        const {name, latitude, longitude, about, instructions, opening_hours, open_on_weekends} = request.body;

        const orphanagesRepository = getRepository(Orphanege);

        const orphanage = orphanagesRepository.create({name, latitude, longitude, about, instructions, opening_hours, open_on_weekends});

        await orphanagesRepository.save(orphanage); // salva no banco

        return response.status(201).json(orphanage); // 201 - algo foi criado
    }
}