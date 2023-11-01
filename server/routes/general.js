import express from "express";
import { getUser, getDashboardStats } from "../controllers/general.js";
// Cria um roteador usando o Express, responsável por lidar com as rotas relacionadas a usuários e estatísticas do painel.
const router = express.Router();
// Define rotas e associa cada uma delas a uma função controladora.
// Cada rota corresponde a um tipo de requisição HTTP (nesse caso, todas são requisições GET).
router.get("/user/:id", getUser);  // Rota para obter informações de um usuário com base em seu ID
router.get("/dashboard", getDashboardStats); // Rota para obter estatísticas do painel

// Exporta o roteador para ser utilizado em outros arquivos.
export default router;
