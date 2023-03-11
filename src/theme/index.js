import { createTheme } from "@material-ui/core/styles";
import { color } from "./color";
import { typography } from "./typography";

const theme = createTheme({
  ...color,
  ...typography,
});

export default theme;
