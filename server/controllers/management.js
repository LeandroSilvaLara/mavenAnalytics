import mongoose from "mongoose";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);// Retorna os administradores como resposta
  } catch (error) {
    res.status(404).json({ message: error.message });// Se houver um erro, retorna uma mensagem de erro
  }
};

export const getUserPerformance = async (req, res) => {
  try {
    const { id } = req.params;// Obtém o parâmetro 'id' da requisição

    // Faz uma agregação para obter informações sobre o desempenho do usuário
    const userWithStats = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } }, // Filtra pelo ID do usuário
      {
        $lookup: {
          from: "affiliatestats",// Faz um lookup na coleção 'affiliatestats'
          localField: "_id",
          foreignField: "userId",// Os resultados são armazenados em 'affiliateStats'
          as: "affiliateStats",
        },
      },
      { $unwind: "$affiliateStats" },// Desagrega os resultados
    ]);

      // Obtém informações sobre transações de venda associadas ao usuário
    const saleTransactions = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map((id) => {
        return Transaction.findById(id);
      })
    );
    // Filtra as transações para remover valores nulos (caso alguma transação não seja encontrada)
    const filteredSaleTransactions = saleTransactions.filter(
      (transaction) => transaction !== null
    );

    res
      .status(200)
      .json({
            user: userWithStats[0],// Retorna informações sobre o usuário
            sales: filteredSaleTransactions // Retorna informações sobre as transações de venda
          });
  } catch (error) {
    res.status(404).json({ message: error.message }); // Se houver um erro, retorna uma mensagem de erro
  }
};
