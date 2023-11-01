import React from "react";
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import {
  GridToolbarDensitySelector,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";

// Componente funcional chamado DataGridCustomToolbar que aceita props como argumento
const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
  return (
     // Renderiza o componente GridToolbarContainer
    <GridToolbarContainer>
      <FlexBetween width="100%">
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </FlexBetween>
         {/* Campo de texto para pesquisa */}
        <TextField
          label="Search..."  // Rótulo do campo de texto
          sx={{ mb: "0.5rem", width: "15rem" }} // Estilos do campo de texto
          onChange={(e) => setSearchInput(e.target.value)} // Função para atualizar o estado de busca
          value={searchInput} // Valor do campo de texto
          variant="standard" // Variante do campo de texto
          InputProps={{
             // Adorno final do campo de texto (ícone de busca)
            endAdornment: (
              <InputAdornment position="end">
                {/* Botão de busca */}
                <IconButton
                  onClick={() => {
                    // Quando o botão é clicado, chama a função de busca e limpa o campo de texto
                    setSearch(searchInput);
                    setSearchInput("");
                  }}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
