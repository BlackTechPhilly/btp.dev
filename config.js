// Importing the secret values (env/configuration) for Next.js
// That will be used throughout client side application

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
  ? publicRuntimeConfig.API_PRODUCTION
  : publicRuntimeConfig.API_DEVELOPMENT;

// ? "URL for production; eg. netlify, heroku, AWS, etc..."
// : "http://localhost:5050; the express server URL";

export const APP_NAME = publicRuntimeConfig.APP_NAME;
