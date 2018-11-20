const http = require('http');
const https = require('https');
const fs = require('fs');
const app = require('./app');

const PORT = process.env.PORT || 3000;
// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/whatwilltheweatherbelike.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/whatwilltheweatherbelike.com/cert.pem', 'utf8');

const credentials = {
  key: privateKey,
  cert: certificate
}

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(PORT);
httpsServer.listen(443);
