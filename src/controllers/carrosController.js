const { Carro } = require('../models/index');

const carroController = {
    async index(req, res){
        const carros = await Carro.findAll()

        return res.status(200).json(carros);
    },
    async created(req, res){
        const { modelo, marca, ano, renavam, placa, cor, preco_aluguel, preco_compra } = req.body;
        const data = new Date()
        const carros = await Carro.create({modelo, marca, ano, renavam, placa, cor, preco_aluguel, preco_compra, createdAt: data, updatedAt: data})
        //console.log(clientes);
        return res.status(200).json(carros)
    },
    async details(req, res){
        const { id } = req.body
        const carros = await Carro.findOne({ where:{ id }})

        return res.status(200).json(carros);
    },
    async update(req, res){
        const { id, modelo, marca, ano, renavam, placa, cor, preco_aluguel, preco_compra } = req.body;
        const data = new Date();
        const carros = await Carro.update({ modelo, marca, ano, renavam, placa, cor, preco_aluguel, preco_compra, updatedAt: data }, { where: { id }});

        return res.status(200).json(carros);
    },
    async delete(req, res){
        const { id } = req.body
        await Carro.destroy({
            where:{ id }
        })

        return res.status(200).json("Deletado com sucesso!");
    },
}

module.exports = carroController