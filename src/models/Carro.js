const sequelize = require("sequelize");

const Carro = (sequelize, dataTypes) => {
    const model = sequelize.define('Carro', {
          id: {
            primaryKey:true,
            type: dataTypes.INTEGER,
            autoIncrement:true
           },
           modelo: dataTypes.STRING(150),
            marca: dataTypes.STRING(105),
            ano: dataTypes.INTEGER,
            renavam: {
             type:dataTypes.STRING(15),
             allowNull: false
            },
            placa:dataTypes.STRING(45),
            cor:dataTypes.STRING(45),
            preco_aluguel: dataTypes.DECIMAL(10,3),
            preco_compra: dataTypes.DECIMAL(10,3),
            createdAt: {
            allowNull:false,
                type: dataTypes.DATE
            },
            updatedAt: {
              allowNull:false,
              type: dataTypes.DATE
            }
    }
    )
    return model;
}

module.exports = Carro;