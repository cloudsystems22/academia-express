const { Cliente } = require('../models/index');

const clientesController = {
    async index(req, res){
        const clientes = await Cliente.findAll()

        return res.status(200).json(clientes);
     },
    async created(req, res){ 
        const { name, rg, cpf, logradouro, numero, bairro, cep, cidade, uf, email } = req.body;
        const clientes = await Cliente.create({name, rg, cpf, logradouro, numero, bairro, cep, cidade, uf, email})
        //console.log(clientes);
        return res.status(200).json(clientes)

    },
    async details(req, res){ 
        const { id } = req.body
        const clientes = await Cliente.findOne({ where:{ id }})

        return res.status(200).json(clientes);
    },
   
    async update(req, res){
        const { id, name, rg, cpf, logradouro, numero, bairro, cep, cidade, uf, email } = req.body;
        const clientes = await Cliente.update({name, rg, cpf, logradouro, numero, bairro, cep, cidade, uf, email }, { where: { id }});

        return res.status(200).json(clientes);
     },
    async delete(req, res){ 
        const { id } = req.body
        await Cliente.destroy({
            where:{ id }
        })

        return res.status(200).json("Deletado com sucesso!");
    }

}

module.exports = clientesController