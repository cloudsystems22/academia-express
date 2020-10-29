const Sequelize =  require('sequelize');
const ConfigDatabase = require('../config/database');

const { QueryTypes } = require('sequelize');

const connection = new Sequelize(ConfigDatabase);

const relatoriosController = {
    async maisProcurado(req, res){
        const [maisprocurados] = await connection.query("SELECT p.carroId, c.modelo as 'Modelo mais procurado', c.marca, COUNT(*) As 'Total' FROM pedidos p INNER JOIN carros c ON p.carroId = c.id group by carroId;");

        return res.status(200).json(maisprocurados);
    },
    async aluguelCompra(req, res){
        const { ano, mes } = req.params;
        console.log(req.params);
        const [alugueCompra] = await connection.query(
            `SELECT tipo, data, clienteId, carroId, COUNT(*) As 'Total Pessoas' FROM pedidos WHERE YEAR(data)=$ano AND MONTH(data)=$mes GROUP BY data;`,
          {
            type: QueryTypes.SELECT,
            bind: { ano, mes },
          },
        );

        return res.status(200).json(alugueCompra);
    },
    async pessoasAluguelAno(req, res){
        const { ano } = req.params;
        console.log(req.body);
        const [pessoasAluguelAno] = await connection.query(
            "SELECT tipo, YEAR(data), COUNT(*) As Total"+
            "FROM pedidos WHERE YEAR(data)=$ano AND tipo = 'Aluguel'"+
            "GROUP BY YEAR(data);",
          {
            type: QueryTypes.SELECT,
            bind: { ano },
          },
        );
        return res.status(200).json(pessoasAluguelAno);
    },
    async pessoasCompraAno(req, res){
        const { ano } = req.body;
        console.log(req.body);
        const [pessoasCompraAno] = await connection.query(
            "SELECT tipo, YEAR(data), COUNT(*) As Total"+
            "FROM pedidos WHERE YEAR(data)='$ano' AND tipo = 'Compra'"+
            "GROUP BY YEAR(data);",
          {
            type: QueryTypes.SELECT,
            bind: { ano },
          },
        );
        return res.status(200).json(pessoasCompraAno);
    }


}

module.exports = relatoriosController