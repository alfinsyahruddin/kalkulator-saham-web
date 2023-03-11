import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: "100vw",
    minHeight: "100vh",
    padding: 20,
    paddingBottom: 70,
    background: "linear-gradient(212.46deg, #ffd953 26.88%, #ffc700 113.35%)",
  },
  sliderContainer: {
    marginTop: theme.spacing(4),
  },
  slide: {
    marginRight: theme.spacing(2),
    "&:focus": {
      outline: "none",
    },
  },
  slideImg: {
    borderRadius: 20,
    cursor: "pointer",
    border: "1.5px solid rgba(255,255,255,0.1)",
    minWidth: 220,
    minHeight: 415,
  },
  footer: {
    width: "100%",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    background: "rgb(192,127,20,0.15)",
    position: "fixed",
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 18,
  },
  button: {
    borderRadius: 12,
    background: "rgba(192,127,20,0.15)",
    fontSize: 18,
    textTransform: "none",
    "&:hover": {
      background: "rgba(192,127,20,0.25)",
    },
  },
}));

export default useStyles;
