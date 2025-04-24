// Importa os módulos necessários
import express from 'express';
import axios from 'axios';
import { JSDOM } from 'jsdom';
import cors from 'cors'; // Importa o middleware CORS

const app = express();
const port = process.env.PORT || 3000;

// Use o middleware CORS para permitir requisições de diferentes origens
app.use(cors());

// Endpoint para iniciar o processo de scraping
app.get('/api/scrape', async (req, res) => {
    const keyword = req.query.keyword;

    // ... (seu código de scraping aqui)

});

// Inicia o servidor Express
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});