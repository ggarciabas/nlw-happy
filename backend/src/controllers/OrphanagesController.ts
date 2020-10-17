import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Orphanege from '../models/Orphanage';
import OrphanagesView from '../views/OrphanagesView';
import * as Yup from 'yup';

export default {
    async index (request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanege);

        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        })

        return response.json(OrphanagesView.renderMany(orphanages));
    },
    async show (request: Request, response: Response) {
        const {id} = request.params
        const orphanagesRepository = getRepository(Orphanege);
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        })

        return response.json(OrphanagesView.render(orphanage));
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

        const data = {name, latitude, longitude, about, instructions, opening_hours, open_on_weekends, images} 

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            )
        });

        await schema.validate(data, {
            abortEarly: false // para retornar todos os erros e não somente o primeiro
        });

        const orphanage = orphanagesRepository.create(data);

        await orphanagesRepository.save(orphanage); // salva no banco

        return response.status(201).json(orphanage); // 201 - algo foi criado
    }
}