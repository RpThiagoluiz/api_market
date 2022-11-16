import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    // Se não conectar no banco de dados não compensa
    const port = 3001;
    app.listen(port, () => {
      console.log(`✨ 🐱‍🏍, Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Connection fail'));
