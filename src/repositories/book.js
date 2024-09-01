const models = require('../models')
const Game = models.Game
const { Op } = require("sequelize");
class Repository {

    async findAll(){
        return Game.findAll({
            order: [
                ['createdAt', 'ASC'],
            ],
        })
    }

    async findOneById(id){
        return Game.findOne({
            where:{id:id}
        })
    }

    async searchGames(object){
        return Game.findAll({
            where:{
                [Op.or]:[
                    {
                        name:{
                            [Op.like]: `%${object.name}%`
                        }
                    },
                    {
                        title:{
                            [Op.like]: `%${object.name}%`
                        }
                    },
                ]

            }
        })
    }
    

}

module.exports = new Repository()