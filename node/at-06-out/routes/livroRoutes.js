import express from 'express';
import { home, catalogo, autores, editoras } from '../controllers/livroController.js';

const router = express.Router();

router.get('/', home);
router.get('/catalogo', catalogo);
router.get('/autores', autores);
router.get('/editoras', editoras);

export default router;
