const models = require('../models')
const Game = models.Game

class Repository {
    async findLatest(){
        return Game.findAll({
            limit: 6,
            order: [
                ['createdAt', 'ASC'],
            ],
        })
    }

    async findMostDownloaded(){
        // TODO Need to change for true data
        return Game.findAll({
            order: [
                ['createdAt', 'ASC'],
            ],
        })
    }
    
}

module.exports = new Repository()