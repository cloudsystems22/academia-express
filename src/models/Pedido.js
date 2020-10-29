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
          allowNull: false
        },
        carroId: {
          type: dataTypes.INTEGER,
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
    );
    model.associate = (models) => {
      model.belongsTo(models.Cliente, {foreignKey:'clienteId', as:'clientes'});
      model.belongsTo(models.Carro, {foreignKey:'carroId', as: 'carros'});
    }
    return model;
}

module.exports = Pedido;