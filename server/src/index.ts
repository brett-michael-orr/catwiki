import * as dotenv from 'dotenv';
import express from "express";
import path from 'path';
import { GetBreeds } from './api';
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
    res.json({ error: "Could not find cat breeds." });
  }
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});