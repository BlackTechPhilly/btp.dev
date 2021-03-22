// Overriding Next default setting to use custom CSS/ Bootstrap
const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  // cssModules: true,
});

// Configuration/ ENV file for Next.js
module.exports = {
  publicRuntimeConfig: {
    APP_NAME: "BTP NEXT",
    API_DEVELOPMENT: "http://localhost:5050",
    PRODUCTION: false,
  },
};

module.exports = {
  BTP_BLOG: "https://btpblog.herokuapp.com/tech-posts",
  SENDGRID: "",
};
