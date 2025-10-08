//Importando o express (framework)
const express = require("express");
//Iniciando o Express na variável 'app'
const app = express();
 
//Configurando o EJS
app.set("view engine", "ejs");
 
//Criando a primeira rota do site (Rota principal)
//Req trata a requisição
//Res trata a resposta
app.get("/", (req, res) => {
  res.render("index");
});
//Rota de Produtos
app.get("/produtos", (req, res) => {
  const produtos = [
    {
      nome : "Celular",
      preco: 3000,
    },
    {
      nome : "Computador",
      preco: 4000,
    },
    {
      nome : "Tablet",
      preco: 2000,
    },
    {
      nome : "Notebook",
      preco: 3800,
    },
  ];
  res.render("produtos", {
    produtos: produtos,
  });
});
//Rota de Clientes
app.get("/clientes", (req, res) => {
  const clientes = [
  {
    nome:"Ricardo",
    cpf:"123.456.789-00",
    endereco:"Rua das Flores, 34"
  },
  {
    nome:"Isaac",
    cpf:"123.456.789-00",
    endereco:"Rua Diamante, 100"
  },
  {
    nome:"Ana Flávia",
    cpf:"123.456.789-00",
    endereco:"Rua Ceará, 20"
  },
  {
    nome:"Renan",
    cpf:"123.456.789-00",
    endereco:"Rua Curitiba, 22"
  },
]
  res.render("clientes",{
    clientes:clientes,
  });
});
//Rota de Perfil
app.get("/perfil", (req, res) => {
  //Criando a variável que será enviada para a página
  const user = "Arthur Souza";
  res.render("perfil", {
    //Enviando variáveis para a página EJS(HTML)
    user: user,
  });
});
 
//Iniciando o servidor HTTP
const port = 8080; //O servidor escutará a porta 8080
 
app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});