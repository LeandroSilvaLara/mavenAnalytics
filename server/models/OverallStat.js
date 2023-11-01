import mongoose from "mongoose";
/* Define um esquema de dados chamado 'OverallStatSchema' usando o Mongoose.
** Este esquema representa estatísticas gerais de vendas.
** Ele inclui vários campos, como total de clientes, total de vendas anuais, total de unidades vendidas anualmente, etc.
*/

const OverallStatSchema = new mongoose.Schema(
  {
    totalCustomers: Number, // Total de clientes
    yearlySalesTotal: Number,// Total de vendas anuais
    yearlyTotalSoldUnits: Number, // Total de unidades vendidas anualmente
    year: Number, // Ano
    monthlyData: [
      {
        month: String,  // Mês
        totalSales: Number,  // Total de vendas no mês
        totalUnits: Number, // Total de unidades vendidas no mês
      },
    ],
    dailyData: [
      {
        date: String,// Data
        totalSales: Number, // Total de vendas no dia
        totalUnits: Number, // Total de unidades vendidas no dia
      },
    ],
    salesByCategory: {
      type: Map, // Tipo do campo é um Map
      of: Number, // Os valores do Map são do tipo Number
    },
  },
  { timestamps: true }
);
// Registra automaticamente carimbos de data e hora de criação e atualização
const OverallStat = mongoose.model("OverallStat", OverallStatSchema);
// Exporta o modelo 'OverallStat' para ser utilizado em outros arquivos.
export default OverallStat;
