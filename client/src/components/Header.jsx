import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

// Componente funcional chamado Header que aceita props como argumento
const Header = ({ title, subtitle }) => {
  // Obtém o tema atual
  const theme = useTheme();
  // Retorna um JSX representando o componente
  return (
    <Box>
      {/* Renderiza um componente Typography com um rótulo h2 */}
      <Typography
        variant="h2" // Define o estilo de fonte como h2
        color={theme.palette.secondary[100]} // Define a cor do texto usando o tema
        fontWeight="bold" // Define o peso da fonte como negrito
        sx={{ mb: "5px" }} // Define estilos específicos usando sx (Styled System)
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[300]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
