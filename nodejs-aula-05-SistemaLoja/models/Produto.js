import  Sequelize  from "sequelize";
import connection from "../config/sequelize-config.js";
//Definindo a estrutura da tabela
const Produto = connection.define('produtos', {
    nome: {
         type: Sequelize.STRING,
         allowNull: false,
    },
        preco: {
            type: Sequelize.FLOAT,
            allowNull: false,

        },
        categoria: {
            type : Sequelize.STRING,
            allowNull: false,
        }
})

//Sincronizando a tabela com o banco de dados

Produto.sync({force:false})
export default Produto;




