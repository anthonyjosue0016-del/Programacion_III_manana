import AreaCirculo from "./useReducer/AreaCirculo";
import Carrito from "./useReducer/Carrito";
import ContadorReducer from "./useReducer/ContadorReducer";
import FormularioReducer from "./useReducer/FormularioReducer";
import ListaReducer from "./useReducer/ListaReducer";

function App() {
    return (
    <>
      <AreaCirculo />
      <ContadorReducer />
      <FormularioReducer />
      <Carrito />
      <ListaReducer />
    </>
  );
}
export default App;