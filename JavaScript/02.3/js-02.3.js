// Objetos literais possuem Atributos e Métodos e não derivam de classes



const pessoa ={};
document.write(typeof pessoa);

const carro = {
    modelo: "gol",
    cor: "vermelho",
    acelerar() {
        return "Acelerando...";
    },
    frear() {
        return "Freando...";
    },
}

//Exibindo as propriedades do objeto
document.write(`<p> O modelo do carro é ${carro.modelo}</p>`);
document.write(`<p>A cor do carro é: ${carro.cor}</p>`);

document.write (`${carro.acelerar()}`);
document.write(`${carro.frear()}`);

const produto = {
    nome: "computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno",
};

    document.write(
  `<p>O ${produto.nome} da marca ${produto.marca} custa apenas R$${produto.preco}! ${produto.descricao}</p>`
);




//Array de objetos
const listaProd = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho.",
  },
   {
    nome: "Celular",
    marca: "Apple",
    preco: 6000,
    descricao: "Ultra resistente.",
  },
];


listaProd.forEach((produto) => {
  document.write(
    `<p>Nome: ${produto.nome}<br>
    marca: ${produto.marca}<br>
    Preço: ${produto.preco}<br>
    Descrição: ${produto.descricao}</p>`
  );
});








