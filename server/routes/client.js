import express from "express";
import {
  getProducts,
  getCustomers,
  getTransactions,
  getGeography,
} from "../controllers/client.js";
// Cria um roteador usando o Express, responsável por lidar com as rotas relacionadas a produtos, clientes, transações e geografia.
const router = express.Router();
// Define rotas e associa cada uma delas a uma função controladora.
// Cada rota corresponde a um tipo de requisição HTTP (nesse caso, todas são requisições GET).
router.get("/products", getProducts); // Rota para obter produtos
router.get("/customers", getCustomers); // Rota para obter clientes
router.get("/transactions", getTransactions); // Rota para obter transações
router.get("/geography", getGeography); // Rota para obter dados de geografia

// Exporta o roteador para ser utilizado em outros arquivos.
export default router;
