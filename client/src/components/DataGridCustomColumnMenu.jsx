import {
  GridColumnMenuContainer,
  GridFilterMenuItem,
  HideGridColMenuItem,
} from "@mui/x-data-grid";

// Componente funcional chamado CustomColumnMenu que aceita props como argumento
const CustomColumnMenu = (props) => {
  // Destruturação de propriedades: hideMenu, currentColumn, open
  const { hideMenu, currentColumn, open } = props;
  // Retorna o JSX do componente
  return (
  // Renderiza o componente GridColumnMenuContainer com algumas propriedades
    <GridColumnMenuContainer
      hideMenu={hideMenu} // Função para ocultar o menu
      currentColumn={currentColumn} // A coluna atual que o menu está associado
      open={open} // Indica se o menu está aberto ou não
    >
      <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
      <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
