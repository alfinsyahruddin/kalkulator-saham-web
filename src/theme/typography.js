const gilroyLight = {
  fontFamily: "Gilroy-Light",
  fontStyle: "light",
  src: `
      local('Gilroy-Light'),
      url('/fonts/Gilroy-Light.woff2') format('woff2')
    `,
};
const gilroyExtraBold = {
  fontFamily: "Gilroy-ExtraBold",
  fontStyle: "bold",
  src: `
      local('Gilroy-ExtraBold'),
      url('/fonts/Gilroy-ExtraBold.woff2') format('woff2')
    `,
};

export const typography = {
  typography: {
    fontFamily: "Gilroy-Light, Arial",
    h1: {
      fontFamily: "Gilroy-ExtraBold",
    },
    h2: {
      fontFamily: "Gilroy-ExtraBold",
    },
    h3: {
      fontFamily: "Gilroy-ExtraBold",
    },
    h4: {
      fontFamily: "Gilroy-ExtraBold",
    },
    h5: {
      fontFamily: "Gilroy-ExtraBold",
    },
    h6: {
      fontFamily: "Gilroy-ExtraBold",
    },
    button: {
      fontFamily: "Gilroy-ExtraBold",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [gilroyLight, gilroyExtraBold],
      },
    },
  },
};
