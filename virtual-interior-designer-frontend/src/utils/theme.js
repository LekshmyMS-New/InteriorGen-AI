import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#4F46E5" },
    secondary: { main: "#06B6D4" },
    background: { default: "#F6F8FB", paper: "#FFFFFF" }
  },
  typography: { fontFamily: '"Inter", "Roboto", sans-serif' },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 10, textTransform: "none" } } }
  }
});

export default theme;
