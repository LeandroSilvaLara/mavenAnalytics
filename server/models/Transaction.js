import mongoose from "mongoose";
/* Define um esquema de dados chamado 'TransactionSchema' usando o Mongoose.
** Este esquema representa informações sobre uma transação.
** Ele inclui campos como o ID do usuário (userId), custo (cost) da transação e uma lista de IDs de produtos associados.
*/
const TransactionSchema = new mongoose.Schema(
  {
    userId: String, // ID do usuário associado à transação
    cost: String, // Custo da transação
    products: {
      type: [mongoose.Types.ObjectId], // Lista de IDs de produtos associados à transação
      of: Number, // Tipo dos valores na lista (neste caso, são do tipo Number)
    },
  },
  { timestamps: true }  // Registra automaticamente carimbos de data e hora de criação e atualização
);
// Cria um modelo a partir do esquema definido acima, chamado 'Transaction'.
const Transaction = mongoose.model("Transaction", TransactionSchema);
// Exporta o modelo 'Transaction' para ser utilizado em outros arquivos.
export default Transaction;
