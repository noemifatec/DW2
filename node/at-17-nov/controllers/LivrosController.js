import express from 'express';
import Livro from '../models/Livro.js';
const router = express.Router();

router.get("/", (req, res) => {
    Livro.findAll().then((livros) => {
        res.render("livros", {
            livros: livros,
        });
    }).catch(error => {
        console.log(error)
    })
})

router.post("/livros/new", (req, res) => {
    const id = req.body.id;
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const editora = req.body.editora;

    Livro.create({
        id: id,
        titulo: titulo,
        autor: autor,
        editora: editora,
    }).then(() => {
        res.redirect("/");
    }).catch(error => {
        console.log(error);
    });
})


router.get("/livros/delete/:id", (req,res) =>{
    const id = req.params.id;
    Livro.destroy({
        where: {
            id: id,
        }
    }).then(()=>{
        res.redirect("/")
    }).catch(error =>{
        console.log(error);
    })
})
export default router;