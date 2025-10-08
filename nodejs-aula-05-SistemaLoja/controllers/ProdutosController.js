import express from "express";
const router = express.Router();

// ROTA PRODUTOS
router.get("/produtos", function (req, res) {
  //SELECT * FROM PRODUTOS
Produto.findAll().then((produtos) => {
  res.render("produtos",{
    produtos:produtos,
  })
})
 
});

export default router;