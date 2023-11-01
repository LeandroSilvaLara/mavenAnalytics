import mongoose from "mongoose";
/* Define um esquema de dados chamado 'ProductSchema' usando o Mongoose.
** Este esquema representa informações de um produto.
** Ele inclui campos como nome, preço, descrição, categoria, classificação (rating) e quantidade em estoque (supply).
*/
const ProductSchema = new mongoose.Schema(
  {
    name: String, // Nome do produto
    price: Number, // Preço do produto
    description: String, // Descrição do produto
    category: String, // Categoria do produto
    rating: Number, // Classificação do produto
    supply: Number, // Quantidade em estoque do produto
  },
  { timestamps: true } // Registra automaticamente carimbos de data e hora de criação e atualização
);

// Cria um modelo a partir do esquema definido acima, chamado 'Product'.
const Product = mongoose.model("Product", ProductSchema);
// Exporta o modelo 'Product' para ser utilizado em outros arquivos.
export default Product;
