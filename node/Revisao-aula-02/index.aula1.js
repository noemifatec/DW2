const express = require("express");
const app = express();



app.listen(8080, function(erro){
    if(erro){
        console.log("Ocorreu um erro")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
    }
)

app.get("/", function(req, res){
    res.send("Olá")
})

//app.get("/perfil", function(req, res){
  //  res.send("Perfil do usuário")
//})

app.get("/perfil/:nome", function(req,res){
    var nome = req.params.nome
    res.send(`Olá, ${nome}!<br>Seja bem vindo!`)
})


