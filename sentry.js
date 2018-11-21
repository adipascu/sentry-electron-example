const sentry = require('@sentry/electron');
sentry.init({
	dsn: 'https://XXXXXXXXXXXXXXXXXXXXXXXX@sentry.io/XXXXXXXXXXXXXXXXXXXXXXXX',
	enableNative: false,
	release: 'v4',
});
