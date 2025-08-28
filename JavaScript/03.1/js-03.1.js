//Classes no javascript

//Criando uma classe

// Nomes de classes iniciam com letra maiúscula

// Para criar os atributos da classe deve-se utilizar o método "construtor"

class Carro {
    constructor(marca, modelo, ano) {
        //this representa a instância (objeto)
        //o valor que for enviado a classe será atribuído à instância
        //ATRIBUTOS
        this.marca = marca,
        this.modelo = modelo;
        this.ano = ano;
    }
    //MÉTODOS
    buzinar( ){
        return "Beep! Bepp!;"
    }
}

// Criando Instâncias (objetos) derivadas da classe Carro
const carroPopular = new Carro("Fiat","Uno",2012);
document.write(`<p>
    O carro ${carroPopular.marca} modelo ${carroPopular.modelo}
    é do ano de ${
        carroPopular.ano
    
    }, Quando buzina faz ${carroPopular.buzinar()}
</p>`)

const carroEsportivo = new Carro("Chevrolet","Camaro",2024);
document.write(`<p>
    O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo}
    é do ano de ${
        carroEsportivo.ano
    
    }, Quando buzina faz ${carroEsportivo.buzinar()}
</p>`)

//Adicionando um novo atributo
carroEsportivo.corNeon = "Azul";

//Adicionando um novo método
carroEsportivo.turbo = ()=> {
    return "Vrummmmmm! O carro acelera muito!!!";
};

document.write(`<p>
    O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} também possui neon da cor ${carroEsportivo.corNeon}. E quando usa o turbo ${carroEsportivo.turbo}`);

   

