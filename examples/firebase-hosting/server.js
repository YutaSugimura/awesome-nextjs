const functions = require('firebase-functions');
const { parse } = require('url');
const next = require('next');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

exports.ssr = functions.https.onRequest(async (req, res) => {
  return app.prepare().then(() => {
    const parsedUrl = parse(req.url, true);

    handle(req, res, parsedUrl);
  });
});
