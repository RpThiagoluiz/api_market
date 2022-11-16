import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

const app = express();

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    // Se não conectar no banco de dados não compensa
    const port = 3001;
    // antes da rotas vc precisa fazer o parse
    app.use(express.json());
    app.use(router);
    app.listen(port, () => {
      console.log(`✨ 🐱‍🏍, Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Connection fail'));
