import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      ".a": {
        textDecoration: "none",
        "&:focus": {
          outline: "none",
        },
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();
  return null;
};

export default GlobalStyles;
