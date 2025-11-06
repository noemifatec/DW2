const express = require("express"); 
const app = express(); // Iniciando o express

app.listen(8080, function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }else
    console.log("Servidor iniciado com sucesso!")

})