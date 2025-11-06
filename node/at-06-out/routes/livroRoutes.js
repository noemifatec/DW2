import express from 'express';
import {
  home,
  catalogo,
  autores,
  editoras,
  novoLivro,
  salvarLivro,
  editarLivro,
  atualizarLivro,
  excluirLivro
} from '../controllers/livroController.js';

const router = express.Router();

// Rotas principais
router.get('/', home);
router.get('/autores', autores);
router.get('/editoras', editoras);

// CRUD de catálogo
router.get('/', catalogo);               // lista geral de livros
router.get('/novo', novoLivro);          // Form novo
router.post('/novo', salvarLivro);       // Salvar novo
router.get('/editar/:id', editarLivro);  // Form editar
router.post('/editar', atualizarLivro);  // Atualizar
router.get('/excluir/:id', excluirLivro);// Excluir

export default router;

