import mongoose from "mongoose";
/* Define um esquema de dados chamado 'ProductStatSchema' usando o Mongoose.
** Este esquema representa estatísticas de produtos.
** Ele inclui campos como o ID do produto (productId), total de vendas anuais, total de unidades vendidas anualmente,
** informações sobre o ano, dados mensais e diários de vendas.
*/
const ProductStatSchema = new mongoose.Schema(
  {
    productId: String,// ID do produto associado a estas estatísticas
    yearlySalesTotal: Number,// Total de vendas anuais do produto
    yearlyTotalSoldUnits: Number,// Total de unidades vendidas anualmente do produto
    year: Number, // Ano associado às estatísticas
    monthlyData: [
      {
        month: String, // Mês
        totalSales: Number, // Total de vendas no mês
        totalUnits: Number, // Total de unidades vendidas no mês
      },
    ],
    dailyData: [
      {
        date: String, // Data
        totalSales: Number, // Total de vendas no dia
        totalUnits: Number, // Total de unidades vendidas no dia
      },
    ],
  },
  { timestamps: true } // Registra automaticamente carimbos de data e hora de criação e atualização
);
// Cria um modelo a partir do esquema definido acima, chamado 'ProductStat'.
const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
// Exporta o modelo 'ProductStat' para ser utilizado em outros arquivos.
export default ProductStat;
