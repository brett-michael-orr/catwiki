import * as dotenv from 'dotenv';
import express from "express";
import path from 'path';
import { Z_ERRNO } from 'zlib';
import { GetBreedById, GetBreeds, GetImagesByBreedId } from './api';
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/public')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from CatWiki!" });
});

app.get("/breeds", async (req, res) => {
  try {
    const breeds = await GetBreeds();
    res.json(breeds.data);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

app.get("/breeds/:id", async(req: { params: { id: string }}, res) => {
  try {
    const images = await GetBreedById(req.params.id);
    res.json(images.data);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
});

app.get("/breeds/:id/images", async(req: { params: { id: string }}, res) => {
  try {
    const images = await GetImagesByBreedId(req.params.id);
    res.json(images.data);
  } catch (err) {
    console.error(err);
    res.json(Z_ERRNO);
  }
});



// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});