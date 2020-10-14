import express from 'express';

const app = express();
app.use(express.json()) /* para que o express entenda o JSON default */

app.get('/users', (request, response) => {
    return response.send({'message':'Hello'});
})

app.listen(3333);
