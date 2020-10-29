const sequelize = require("sequelize");

const Cliente = (sequelize, dataTypes) => {
    const model = sequelize.define('Cliente', {
          id: {
            primaryKey:true,
            type: dataTypes.INTEGER,
            autoIncrement:true
           },
           name: { 
             type:dataTypes.STRING(250),
             allowNull: false
           },
           rg: { 
            type:dataTypes.STRING(9),
            allowNull: false
          },
          cpf: { 
            type:dataTypes.STRING(14),
            allowNull: false
          },
          logradouro: dataTypes.STRING(45),
          numero: dataTypes.STRING(5),
          bairro: dataTypes.STRING(45),
          cep: dataTypes.STRING(15),
          cidade: dataTypes.STRING(45),
          uf: dataTypes.STRING(45),
          email: dataTypes.STRING(45),
    },
    {
        tableName: 'clientes',
        timestamps: false
    }
    )
    return model;
}

module.exports = Cliente;