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
document.write(`<p> O modelo do carro é ${carro.modelo}.</p>)
`);
document.write (`${carro.acelerar()}`)

const produto ={
    nome: "computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno",
};

const produto ={
    nome: "tablet",
    marca: "samsung",
    preco: 6000,
    descricao: "Ultra moderno",
};







