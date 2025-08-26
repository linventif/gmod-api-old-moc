const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// Allow CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API
app.get('/api', async (req, res) => {
	res.send('Hello World!');
});

app.get('/dbPing', async (req, res) => {
	res.send('MariaDB ping: 0');
});

app.get('/user/isBan/steamID64', express.json(), async (req, res) => {
	res.send(false);
});

app.get('/user/isDev/steamID64', express.json(), async (req, res) => {
	res.send(false);
});

app.post('/user/isBan/netInfo', express.json(), async (req, res) => {
	res.send(false);
});

app.post('/server/stat/upload', express.json(), async (req, res) => {
	res.send('ok');
});

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// if no page is found, send 400
app.use((req, res) => {
	res.status(400).send('Bad Request');
});

// Start the server
const port = 53445;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
