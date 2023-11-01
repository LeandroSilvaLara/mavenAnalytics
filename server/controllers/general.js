import User from "../models/User.js";
import OverallStat from "../models/OverallStat.js";
import Transaction from "../models/Transaction.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params; // Obtém o parâmetro 'id' da requisiçã
    const user = await User.findById(id); // Busca um usuário no banco de dados pelo ID
    res.status(200).json(user);  // Retorna o usuário como resposta
  } catch (error) {
    res.status(404).json({ message: error.message }); // Se houver um erro, retorna uma mensagem de erro
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    // hardcoded values (valores fixos)
    const currentMonth = "November"; // Mês atual
    const currentYear = 2021; // Ano atual
    const currentDay = "2021-11-15"; // Dia atual

    /* Recent Transactions (Transações Recentes) */
    const transactions = await Transaction.find()
      .limit(50) // Limite de 50 transações
      .sort({ createdOn: -1 }); // Ordena por data de criação em ordem decrescente

    /* Overall Stats (Estatísticas Gerais) */
    const overallStat = await OverallStat.find({ year: currentYear }); // Busca estatísticas gerais para o ano atual

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat[0]; // Desestruturação das estatísticas gerais

    const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth; // Obtém estatísticas do mês atua
    });

    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === currentDay; // Obtém estatísticas do dia atual
    });

    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions,// Retorna todas as estatísticas como resposta
    });
  } catch (error) {
    res.status(404).json({ message: error.message }); // Se houver um erro, retorna uma mensagem de erro
  }
};
