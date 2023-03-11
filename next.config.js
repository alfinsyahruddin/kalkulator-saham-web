const withPWA = require("next-pwa");

module.exports = {
  distDir: "build",
  ...withPWA({
    pwa: {
      dest: "public",
    },
  }),
};
