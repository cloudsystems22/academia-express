const { Pedido, Cliente, Carro } = require('../models/index')

const pedidosController = {
    async index(req, res){
        const pedidos = await Pedido.findAll({include:[{model:Cliente, as:'clientes'}], include:[{model:Carro, as:'carros'}]})

        return res.status(200).json(pedidos);
    },
    async created(req, res){
        const { data, diarias, tipo, clienteId, carroId } = req.body;
        const now = new Date()
        const pedidos = await Pedido.create({data, diarias, tipo, clienteId, carroId, createdAt: now, updatedAt: now})
        //console.log(clientes);
        return res.status(200).json(pedidos)
    },
    async updated(req, res){
        const { id, data, diarias, tipo, clienteId, carroId } = req.body;
        const now = new Date()
        const pedidos = await Pedido.update({data, diarias, tipo, clienteId, carroId, updatedAt: now}, { where: { id }})
        //console.log(clientes);
        return res.status(200).json(pedidos)

    },
    async details(req, res){
        const { id } = req.body
        const pedidos = await Pedido.findOne({ where:{ id }})

        return res.status(200).json(pedidos);
    },
    async delete(req, res){
        const { id } = req.body
        await Pedido.destroy({
            where:{ id }
        })

        return res.status(200).json("Deletado com sucesso!");
    }

}

module.exports = pedidosController