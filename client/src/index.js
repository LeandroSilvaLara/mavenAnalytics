import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "state";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "state/api";

// Configuração da loja Redux (Redux Store)
const store = configureStore({
  reducer: {
    global: globalReducer, // Redutor global para o estado da aplicação
    [api.reducerPath]: api.reducer, // Redutor para lidar com chamadas de API usando RTK Query
  },
  middleware: (getDefault) => getDefault().concat(api.middleware), // Adicionando middleware para lidar com chamadas de API
});
setupListeners(store.dispatch); // Configurando ouvintes para interceptar ações e chamadas de API

// Criação de uma raiz de ReactDOM para renderizar a aplicação
const root = ReactDOM.createRoot(document.getElementById("root"));
// Renderizando a aplicação
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
