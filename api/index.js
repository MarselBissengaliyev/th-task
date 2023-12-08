import express from 'express';
import cors from 'cors';

import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import { DocumentController } from './controllers/index.js';

dotenv.config()

mongoose
    .connect(process.env.MONGOOSE_CONNECT_URL)
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err))

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL
}));

app.get('/documents', DocumentController.getAll);
app.get('/documents/:id', DocumentController.getOne);
app.post('/documents', DocumentController.create);
app.delete('/documents/:id', DocumentController.remove);
app.put('/documents/:id', DocumentController.update);

app.listen(process.env.PORT || 4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
});
