import { AxiosResponse } from 'axios';
import * as dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { IBreed } from '../../models/breed.model';
import { IImage } from '../../models/image.model';
import { GetBreedById, GetBreeds, GetImagesByBreedId } from './api';
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/public')));

app.get('/api/breeds', async (req, res) => {
    try {
        const breeds = await GetBreeds();
        res.json(breeds.data);
    } catch (err) {
        console.error(err);
        res.status(400).json(err.message);
    }
});

app.get('/api/breeds/:id', async (req: { params: { id: string } }, res) => {
    try {
        const breed = (await GetBreedById(
            req.params.id
        )) as AxiosResponse<IBreed>;
        res.json(breed.data);
    } catch (err) {
        console.error(err);
        res.status(400).json(err.message);
    }
});

app.get(
    '/api/breeds/:id/images',
    async (req: { params: { id: string } }, res) => {
        try {
            const images = (await GetImagesByBreedId(
                req.params.id
            )) as AxiosResponse<IImage[]>;
            res.json(images.data);
        } catch (err) {
            console.error(err);
            res.status(400).json(err.message);
        }
    }
);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
