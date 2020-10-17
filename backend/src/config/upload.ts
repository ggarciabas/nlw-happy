import multer from 'multer';
import path from 'path'; // caminhos relativos 

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            cb(null, fileName); // recebe um erro e o resultado, por isto nulo no primeiro parâmetro
        },
    })
};