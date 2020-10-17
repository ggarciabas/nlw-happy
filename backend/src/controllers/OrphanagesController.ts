import {Request, Response} from 'express';
import multer from 'multer';
import {getRepository} from 'typeorm';
import Orphanege from '../models/Orphanage';

export default {
    async index (request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanege);

        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        })

        return response.json(orphanages);
    },
    async show (request: Request, response: Response) {
        const {id} = request.params
        const orphanagesRepository = getRepository(Orphanege);
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        })

        return response.json(orphanage);
    },

    async create (request: Request, response: Response) {
        // request.files --> array com as imagens do upload
        const {name, latitude, longitude, about, instructions, opening_hours, open_on_weekends} = request.body;

        const orphanagesRepository = getRepository(Orphanege);

        // recupera imagens
        const requestImages = request.files as Express.Multer.File[]; // necessário por utilizar o upload.array
        const images = requestImages.map (image => {
            return {path: image.filename }
        }) // percorre cada imagem retornando o caminho

        const orphanage = orphanagesRepository.create({name, latitude, longitude, about, instructions, opening_hours, open_on_weekends, images});

        await orphanagesRepository.save(orphanage); // salva no banco

        return response.status(201).json(orphanage); // 201 - algo foi criado
    }
}