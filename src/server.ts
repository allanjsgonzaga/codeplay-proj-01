import express from 'express';
import cors from 'cors';
import http from 'node:http';

const app = express();

const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.get('/hello', (req, res) => {
    res.send("Você está visualizando a primeira rota do server");
});

const PORT = 3333;

server.listen(PORT, ()=>{
    console.log('SERVER RODANDO NA PORTA ${PORT}');
});