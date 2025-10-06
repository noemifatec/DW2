import express from 'express';
import livroRoutes from './routes/livroRoutes.js';

const app = express();
const PORT = 3000;

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Arquivos estáticos
app.use(express.static('public'));

// Rotas
app.use('/', livroRoutes);



app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
