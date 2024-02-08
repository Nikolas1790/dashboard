import { ContainerMain, WraperBox } from "./App.styled";
import Dashboard from "./Dasboard/Dashboard";

export const App = () => {
  return (
    <WraperBox>
      <ContainerMain>
        <Dashboard />

        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>

      </ContainerMain>
    </WraperBox>
  );
};
