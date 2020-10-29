const sequelize = require("sequelize");

const Pedido = (sequelize, dataTypes) => {
    const model = sequelize.define('Pedido', {
        id: {
            primaryKey:true,
            type: dataTypes.INTEGER,
            autoIncrement:true
        },
        data: dataTypes.DATE,
        diarias: dataTypes.INTEGER,
        tipo: dataTypes.STRING(45),
        clienteId: {
          type: dataTypes.INTEGER,
          references: {
            model: 'clientes',
            key: 'id'
          },
          allowNull: false
        },
        carroId: {
          type: dataTypes.INTEGER,
          references: {
            model: 'carros',
            key: 'id'
          },
          allowNull: false
        },
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

module.exports = Pedido;