/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logo from "icons/logo";
import Slider from "react-slick";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import useStyles from "../styles";

const sliderSettings = {
  arrows: false,
  dots: true,
  infinite: true,
  swipeToSlide: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  variableWidth: true,
  autoPlaySpeed: 500,
  autoPlay: true,
  centerPadding: true,
};

const screenshots = [
  "images/screenshots/1.png",
  "images/screenshots/2.png",
  "images/screenshots/3.png",
  "images/screenshots/4.png",
];

export default function Index() {
  const classes = useStyles();
  const sliderRef = React.useRef();
  const theme = useTheme();
  const upSM = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
        className={classes.container}
      >
        <Grid
          item
          xs={12}
          sm={9}
          container
          spacing={4}
          direction={upSM ? "row" : "column-reverse"}
        >
          <Grid
            item
            justify="center"
            container
            style={upSM ? { width: 250 } : null}
          >
            <div style={{ width: upSM ? "100%" : 250 }}>
              <Slider ref={sliderRef} {...sliderSettings}>
                {screenshots.map((item) => (
                  <div key={item} className={classes.slide}>
                    <img
                      alt="Screenshot"
                      src={item}
                      className={classes.slideImg}
                      width={upSM ? 220 : 250}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={8}
            alignItems="center"
            alignContent="center"
          >
            <Grid
              container
              spacing={upSM ? 2 : 1}
              alignItems="center"
              justify={upSM ? "flex-start" : "center"}
            >
              <Grid item>
                <img
                  src="/images/icons/icon.png"
                  alt="icon"
                  style={{
                    display: "inline-block",
                    height: upSM ? 40 : 50,
                    width: "auto",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography variant="h4">Kalkulator Saham</Typography>
              </Grid>
            </Grid>
            <Typography
              variant="h5"
              style={{
                fontFamily: "Gilroy-Light",
                textAlign: upSM ? "left" : "center",
                marginBottom: 20,
              }}
            >
              Kalkulator Saham is a Stock Calculator app on Indonesia Stock
              Exchange (IDX).
            </Typography>
            <a
              target="_blank"
              rel="external noreferrer"
              href="https://apps.apple.com/us/app/kalkulator-saham/id6445988371"
              style={{
                height: 40,
                display: "block",
                margin: upSM ? "0px" : "0px auto 20px auto",
              }}
            >
              <img
                alt="App Store"
                src="images/icons/download-on-the-appstore.png"
                style={{ height: "50px" }}
              />
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        className={classes.footer}
        style={{
          position: upSM ? "fixed" : "relative",
          paddingLeft: upSM ? 50 : 20,
          paddingRight: upSM ? 50 : 20,
        }}
      >
        {upSM && (
          <Grid
            item
            xs={12}
            sm={6}
            container
            justify={upSM ? "flex-start" : "center"}
          >
            <Typography
              variant="subtitle1"
              style={{ fontFamily: "Gilroy-ExtraBold" }}
            >
              © Copyright 2023
            </Typography>
          </Grid>
        )}

        <Grid
          item
          xs={12}
          sm={6}
          container
          justify={upSM ? "flex-end" : "center"}
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Typography variant="subtitle1">Found a bug ?</Typography>
          </Grid>
          <Grid item>
            <Button
              href="https://alfin.dev"
              target="_blank"
              variant="contained"
              color="primary"
              disableElevation
              className={classes.button}
            >
              Contact Me
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
