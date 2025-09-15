// 1️⃣ Data e hora atuais
const dataAtual = new Date();
document.write("<p>Data e hora atuais: " + dataAtual.toString() + "</p>");

// 2️⃣ Valor da compra em dólar
const compraInternacional = 500.75;
const valorUSD = compraInternacional.toLocaleString("en-US", {
  style: "currency",
  currency: "USD"
});
document.write("<p>Valor da compra em dólar: " + valorUSD + "</p>");

// 3️⃣ Conversão para real (BRL)
const taxaCambio = 5.25; // 1 USD = 5.25 BRL (exemplo)
const valorBRL = (compraInternacional * taxaCambio).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});
document.write("<p>Valor da compra em real: " + valorBRL + "</p>");

// 4️⃣ Data de entrega (12 dias a partir da data atual)
const dataEntrega = new Date();
dataEntrega.setDate(dataAtual.getDate() + 12); // soma 12 dias

const dia = String(dataEntrega.getDate()).padStart(2, '0');
const mes = String(dataEntrega.getMonth() + 1).padStart(2, '0'); // mês começa do 0
const ano = dataEntrega.getFullYear();

document.write("<p>Data de entrega estimada: " + dia + "/" + mes + "/" + ano + "</p>");







    


