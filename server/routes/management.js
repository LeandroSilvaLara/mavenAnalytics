import express from "express";
import { getAdmins, getUserPerformance } from "../controllers/management.js";
// Cria um roteador usando o Express, responsável por lidar com as rotas relacionadas a admins e performance de usuários.
const router = express.Router();

// Define rotas e associa cada uma delas a uma função controladora.
// Cada rota corresponde a um tipo de requisição HTTP (nesse caso, todas são requisições GET).
router.get("/admins", getAdmins); // Rota para obter informações de administradores
router.get("/performance/:id", getUserPerformance); // Rota para obter o desempenho de um usuário com base no ID

// Exporta o roteador para ser utilizado em outros arquivos.
export default router;
