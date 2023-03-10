import { createTheme } from "@mui/material/styles";
import colors from "../../Utils/Colors/Index";
const theme = createTheme({
  palette: {
    primary: {
      main: colors.orange.primary,
    },
    secondary: {
      main: colors.white.primary,
    },
    tertiary: {
      main: colors.gray.secondary,
    },
    error: {
      main: colors.pink.secondary,
    },
    success: {
      main: colors.green.quaternary,
    },
    warning: {
      main: colors.error.secondary,
    },
  },
});
export default theme;
