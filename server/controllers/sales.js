import OverallStat from "../models/OverallStat.js";

export const getSales = async (req, res) => {
  try {
    const overallStats = await OverallStat.find(); // Obtém estatísticas gerais

    res.status(200).json(overallStats[0]); // Retorna as estatísticas gerais como resposta
  } catch (error) {
    res.status(404).json({ message: error.message }); // Se houver um erro, retorna uma mensagem de erro
  }
};
