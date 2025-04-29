import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import NavegacaoPilha from "./NavegacaoPilha";
import NavegacaoGaveta from "./Navegacaogaveta";

function NavegacaoPrincipal() {
  const { logado } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {logado ? <NavegacaoGaveta /> : <NavegacaoPilha />}
    </NavigationContainer>
  );
}

export default NavegacaoPrincipal;
