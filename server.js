const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Permite que o front-end acesse a API


const  FILE_PATH = 'historico.json';


// Rota para salvar a nota
app.post('/salvarNota', (req, res) => {
    const { nota } = req.body;

    // Lê o arquivo atual
    let historico = [];
    if (fs.existsSync(FILE_PATH)) {
        historico = JSON.parse(fs.readFileSync(FILE_PATH));
    }

    // Adiciona a nova nota
    historico.push(nota);

    // Salva no arquivo
    fs.writeFileSync(FILE_PATH, JSON.stringify(historico, null, 2));

    res.json({ success: true, message: 'Nota salva com sucesso!' });
});

// Rota para obter as notas salvas
app.get('/notas', (req, res) => {
    if (fs.existsSync(FILE_PATH)) {
        const historico = JSON.parse(fs.readFileSync(FILE_PATH));
        res.json(historico);
    } else {
        res.json([]);
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});