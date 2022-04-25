// Overriding Next default setting to use custom CSS/ Bootstrap
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
module.exports = withPlugins([
	[
		optimizedImages,
		{
			/* config for next-optimized-images */
		}
	]

	// your other plugins here
]);

module.exports = withCSS(
	{
		// cssModules: true,
	}
);

// Configuration/ ENV file for Next.js
module.exports = {
	publicRuntimeConfig: {
		APP_NAME: 'BTP NEXT',
		API_DEVELOPMENT: 'http://localhost:5050',
		PRODUCTION: false
	}
};

module.exports = {
	BTP_BLOG: 'https://btpblog.herokuapp.com/tech-posts',
	future: {
		webpack5: false
	},
	SENDGRID: ''
};

module.exports = {
	// Target must be serverless
	target: 'serverless'
};

