import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/Theme";
import { GreenSwitch } from "./components/GreenSwitch/GreenSwitch";
import { InputText } from "./components/Input/InputText";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      {/*
       * TODO: Aqui va el codigo
       *
       */}

      {/* Algunos componentes  */}
      <GreenSwitch />
      <InputText text="Usuario" />
    </ThemeProvider>
  );
};

export default App;
