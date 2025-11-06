import express from 'express';
import path from "path";
import livroRoutes from './routes/livroRoutes.js';

const app = express();
const PORT = 3000;

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Arquivos estáticos
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

// Rotas
app.use("/catalogo", livroRoutes);



app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
