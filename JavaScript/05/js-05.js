//  Manipulação de Datas

document.write("<h3></h3>Manipulação de Datas:</h3>");
//criar uma instância da classe Date() do Javascript
const dataAtual = new Date();
document.write(dataAtual)

const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia: ${dia}</p>`)

const mês = dataAtual.getMonth() + 1;
document.write(`<p>Estamos no mês: ${mês}</p>`)

const ano = dataAtual.getFullYear();
document.write(`<p>Ano atual: ${ano}</p>`)

const diaSemana = dataAtual.getDay();
document.write(`<p>Dia da semana: ${diaSemana}</p>`)

//Adicionando 4 anos ao ano atual




//Formatação de moedas

// Real

const salario = 1512;

const salarioReal = salario.toLocaleString("pt-br",{
    style: "currency",
    currency:"BRL",
});
document.write(`<p>O valor do salário mínimo atual é ${salarioReal}.</p>`);

const salarioDolar =  salario.toLocaleString("en",{
    style: "currency",
    currency: "USD",
    

});
const salarioConvertido = salario * 0.176;
document.write(`<p>Em dólar:${salarioDolar}.</p>`);

document.write(`<p>Convertido:${salarioConvertido.toLocaleString("en",{
    style: "currency",
    currency: "USD",})}.</p>`);






    


