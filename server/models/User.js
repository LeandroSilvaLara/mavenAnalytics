import mongoose from "mongoose";
/* Define um esquema de dados chamado 'UserSchema' usando o Mongoose.
** Este esquema representa informações sobre um usuário.
** Ele inclui campos como nome (name), email, senha (password), cidade (city), estado (state), país (country),
** ocupação (occupation), número de telefone (phoneNumber), transações (transactions), papel (role) do usuário, etc.
*/

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array, // Lista de transações associadas ao usuário
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"], // Papéis possíveis para o usuário
      default: "admin", // Papel padrão caso não seja especificado
    },
  },
  { timestamps: true } // Registra automaticamente carimbos de data e hora de criação e atualização
);
// Cria um modelo a partir do esquema definido acima, chamado 'User'.
const User = mongoose.model("User", UserSchema);
// Exporta o modelo 'User' para ser utilizado em outros arquivos.
export default User;
