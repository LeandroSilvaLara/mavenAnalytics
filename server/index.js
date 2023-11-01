import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

// data imports
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";

// Configuração do ambiente usando o dotenv para carregar variáveis de ambiente de um arquivo .env
dotenv.config();
const app = express();// Inicialização do aplicativo Express
app.use(express.json());// Middlewares para lidar com requisições e respostas em formato JSON
app.use(helmet());// Utilização do middleware Helmet para segurança, configurando a política de recursos de origem cruzada (cross-origin)
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); // Utilização do middleware Helmet para segurança, configurando a política de recursos de origem cruzada (cross-origin)
app.use(morgan("common")); // Middleware para logging de requisições usando o morgan
app.use(bodyParser.json()); // Middlewares para analisar o corpo da requisição em formato JSON e URL codificada
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // Middleware para permitir solicitações de diferentes origens (Cross-Origin Resource Sharing - CORS)

/* ROUTES */
// Define as rotas para diferentes partes da aplicação
app.use("/client", clientRoutes); // Rotas para clientes
app.use("/general", generalRoutes); // Rotas gerais
app.use("/management", managementRoutes); // Rotas de gerenciamento
app.use("/sales", salesRoutes); // Rotas de vendas

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
// Conexão com o banco de dados MongoDB usando o Mongoose
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Inicia o servidor Express na porta especificada
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    //AffiliateStat.insertMany(dataAffiliateStat);
    //OverallStat.insertMany(dataOverallStat);
    // Product.insertMany(dataProduct);
    //ProductStat.insertMany(dataProductStat);
    //Transaction.insertMany(dataTransaction);
    //User.insertMany(dataUser);
  })
  .catch((error) => console.log(`${error} did not connect`));
