const { User } = require('../models/index');
const userController = {
    async index(req, res){
        const users = await User.findAll();
        
        return res.status(200).json(users)
    },

    async delete(req, res){
        const { id } = req.body;
        try{
            await User.destroy({
                where: { id }
            });
            return res.status(200).json('Excluido com sucesso!')
        } catch (err){
            return res.status(401).json('Erro ao excluir esse usuário');
        }
    }
}

module.exports = userController;