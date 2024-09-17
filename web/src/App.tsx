import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/Theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      {/*
       * TODO: Aqui va el codigo
       *
       */}
    </ThemeProvider>
  );
};

export default App;
