import mongoose from "mongoose";
/* Define um esquema de dados para as estatísticas de afiliados.
** Cada estatística de afiliado inclui um ID de usuário associado e uma lista de IDs de transações de vendas afiliadas.
** O campo 'userId' é uma referência ao modelo 'User', enquanto 'affiliateSales' é uma referência ao modelo 'Transaction'.
** Além disso, este esquema registra automaticamente os carimbos de data e hora de criação e atualização.
*/

const AffiliateStatSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timestamps: true }
);
// Cria um modelo a partir do esquema definido acima, chamado 'AffiliateStat'.
const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatSchema);
// Exporta o modelo 'AffiliateStat' para ser utilizado em outros arquivos.
export default AffiliateStat;
