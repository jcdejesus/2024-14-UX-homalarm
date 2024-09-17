import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "#113F67",
      light: "#7AA9D8",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#67113F",
      contrastText: "#ffffff",
    },
    info: {
      main: "#2C786C",
      light: "#6CB5A8",
    },
    error: {
      main: "#DC2F2F",
    },
    grey: {
      A700: "#525252",
      A400: "#D9D9D9", // Used for buttons
    },
    text: {
      primary: "#3D3D3D",
      secondary: "#525252",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "40px",
          padding: "10px 24px",
          borderRadius: "0",
          textTransform: "none",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          height: "48px",
        },
      },
    },
  },
});
