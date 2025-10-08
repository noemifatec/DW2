// Importando o Express (framework)
const express = require("express");
// Iniciando o Express na variáveç "app"
const app = express();

// Configurando o ejs
app.set("view engine", "ejs");

//Criando a primeira rota do SubmitEvent(rota principal)
//app.get("/", (req, res) => {
//   res.send(
//     "<h1>Hello world! Bem vindo ao meu primeiro site com Node.js e Express! =)</h1>"
//   );
// });
app.get("/", (req, res) => {
  res.render("index");
});

// app.get('/', (req, res) => {
//   res.render('home'); // ou res.send('Home')
// });

// rota de produtos
// app.get("/produtos", (req, res) => {
//   res.send("Bem-vindo à página de Produtos!!");
// });

// rota de clientes
// app.get("/clientes", (req, res) => {
//   res.send("Bem-vindo à página de clientes!");
// });

app.get("/produtos", (req, res) => {
  res.render("produtos");
});

app.get("/clientes", (req, res) => {
  res.render("clientes");
});


//iNICIANDO O SERVIDOR http
const port = 8080; // O servidor escutará na porta 8080

app.listen(port, function (error) {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});


