import { ContainerMain, WraperBox } from "./App.styled";
import Dashboard from "./Dasboard/Dashboard";
import MainBlockInf from "./MainBlockInf/MainBlockInf";

export const App = () => {
  return (
    <WraperBox>
      <ContainerMain>

        <Dashboard />
        
        <MainBlockInf />
        
      </ContainerMain>
    </WraperBox>
  );
};
