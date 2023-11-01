import express from "express";
import { getSales } from "../controllers/sales.js";
// Cria um roteador usando o Express, responsável por lidar com a rota relacionada a estatísticas de vendas.
const router = express.Router();

// Define uma rota e a associa a uma função controladora.
// Esta rota corresponde a um tipo de requisição HTTP (neste caso, é uma requisição GET).
router.get("/sales", getSales); // Rota para obter estatísticas de vendas

// Exporta o roteador para ser utilizado em outros arquivos.
export default router;
