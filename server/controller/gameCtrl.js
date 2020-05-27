const games = require('../dummyData/dummyGames.json');

module.exports = {
    getGames: (req, res) => {
        res.status(200).send(games)
    }
}