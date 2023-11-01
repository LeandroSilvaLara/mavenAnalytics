const { Box } = require("@mui/material");
const { styled } = require("@mui/system");

// Define um componente chamado FlexBetween usando a biblioteca styled-components
const FlexBetween = styled(Box)({
  // Define um estilo flexível para o componente
  display: "flex", // Define o display como flexível
  justifyContent: "space-between", // Alinha os itens com espaço entre eles
  alignItems: "center", // Alinha os itens verticalmente ao centro
});

export default FlexBetween;
