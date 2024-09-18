import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/Theme";
import { GreenSwitch } from "./components/GreenSwitch/GreenSwitch";
import { InputText } from "./components/Input/InputText";
import { Button } from "./components/Button/Button";
import { CardChip } from "./components/CardChip/CardChip";
import { ToastBar } from "./components/ToastBar/ToastBar";
import { CssBaseline } from "@mui/material";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/*
       * TODO: Aqui va el codigo
       *
       */}

      {/* Algunos componentes  */}
      <GreenSwitch />
      <InputText direction="Column" text="Usuario" />
      <InputText direction="Column" text="Usuario" />
      <Button texture="Blue" text="Aceptar" />
      <Button texture="Gray" text="Cancelar" />
      <CardChip text="L" />
      <CardChip text="M" />
      <CardChip text="M" texture="Redwine" />
      <CardChip text="J" texture="Redwine" />
      <CardChip text="V" texture="Redwine" />
      <ToastBar text="Su alarma ha sido creada" texture="Success" />
    </ThemeProvider>
  );
};

export default App;
