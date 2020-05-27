// dependencies
const express = require('express');
const app = express();
// variables
const SERVER_PORT = 4321;
const ctrl = require('./controller/gameCtrl')
// middleware
app.use(express.json())

// games endpoints
app.get('/api/games', ctrl.getGames)


app.listen(SERVER_PORT, () => console.log(`port ${SERVER_PORT} 🎲`))