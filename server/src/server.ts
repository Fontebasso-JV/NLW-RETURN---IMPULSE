import express from 'express'
import { routes } from './routes';

const app = express();

app.use(express.json()); 


// GET = BUSCAR INFORMAÇÕES 
// POST = CADASTRAR INFORMAÇÕES
// PUT = ATUALIZAR INFORMAÇÕES DE UMA ENTIDADE
// PATCH = ATUALIZAR UMA INFORMAÇÃO UNICA DE UMA ENTIDADE
// DELETE = DELETAR UMA INFORMAÇÃO




app.use(routes)

app.listen(3333, () => {
    console.log('HTTP server running!')
});