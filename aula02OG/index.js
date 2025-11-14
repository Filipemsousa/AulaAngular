// Importar as bibliotecas necessárias
const express = require("express"); // Framework para criar o servidor
const cors = require("cors"); // Permissão para o Angular acessar a API 
const app = express(); // Inicializar o Express
const PORT = 3001; // A porta que a API vai rodar (igual ao seu exemplo)
app.use(cors()); // Habilita o CORS para todas as rotas
app.use(express.json()); // Habilita o Express para ler JSON do corpo (req.body)



// "Banco de Dados"
let proximoId = 5; // Um contador para gerar novos IDs
let db_sabores = [
    {
        "id": 1,
        "nome": "Chocolate Belga",
        "tipo": "Creme",
        "disponivel": true
    },
    {
        "id": 2,
        "nome": "Morango",
        "tipo": "Fruta",
        "disponivel": true
    },
    {
        "id": 3,
        "nome": "Pistache",
        "tipo": "Especial",
        "disponivel": false
    },
    {
        "id": 4,
        "nome": "Limão Siciliano",
        "tipo": "Fruta",
        "disponivel": true
    }
];



// ROTA: GET /sabores (Retorna a lista completa de sabores)
app.get("/sabores", (req, res) => {
    try {
        // Retorna a lista completa do "banco de dados"
        return res.status(200).json(db_sabores);

    } catch (error) {
        // Bloco 'catch' que capturaa os erros no servidor
        return res.status(500).json({
            message: "Falha na comunicação com o servidor!",
            error: String(error)
        });
    }
});



// ROTA: POST /sabores (Cria um novo sabor de sorvete)
app.post("/sabores", (req, res) => {
    try {
        // Pega os dados enviados pelo Angular na requisição
        const { nome, tipo, disponivel } = req.body;

        // Validação dos dados
        if (!nome || !tipo) {
            return res.status(400).json({
                message: "Os campos 'nome' e 'tipo' são obrigatórios!"
            });
        }

        // Cria o novo objeto de sabor
        const novoSabor = {
            id: proximoId, // Contador
            nome: nome,
            tipo: tipo,
            // Se 'disponivel' não for enviado, assume 'true'
            disponivel: disponivel === undefined ? true : disponivel 
        };

        // "Salva" no "banco de dados"
        proximoId++; // Incrementa o ID para o próximo
        db_sabores.push(novoSabor);

        // Retorna o objeto que foi criado (201 Created é o status HTTP correto para POST)
        return res.status(201).json(novoSabor);

    } catch (error) {
        return res.status(500).json({
            message: "Falha na comunicação com o servidor!",
            error: String(error)
        });
    }
});

// Iniciar o Servidor
app.listen(PORT, () => {
    console.log(`API de Sorvetes rodando em http://localhost:${PORT}/`);
    console.log(`Endpoint de GET: http://localhost:${PORT}/sabores`);
    console.log(`Endpoint de POST: http://localhost:${PORT}/sabores`);
});