import {ErrorRequestHandler} from 'express';
import {ValidationError} from 'Yup';

interface ValidationErrors {
    [key: string]: string[] // retorna estrutura: key: [erro1, erro2, erro3]
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    if (error instanceof ValidationError) {
        let errors : ValidationErrors = {};

        error.inner.forEach(err => {
            errors[err.path] = err.errors
        }); 
        // dentro de error existe um array inner com algumas informações completas. Dentro deste existe uma chave com os erros identificados por errors. A chave path identifica o campo validado com erro.

        return response.status(400).json({message: 'Validation fails', errors})
    }
    
    console.log(error);

    return response.status(500).json({message:'Internal Server Error'});
};

export default errorHandler;