const service = require('../services/books')

exports.getAll = async function (req, res) {
  try{
    const books = await service.getAll();
    return res.status(200).send(games);
  }catch(err){
    return res.status(400).json({error:err})
  }

}

exports.getOne = async function (req, res) {
    try{
      const book = await service.getOne();
      return res.status(200).send(game);
    }catch(err){
      return res.status(400).json({error:err})
    }
  
  }

exports.create = async function (req, res) {
    try{
      const newBook = await service.create();
      return res.status(200).send(newBook);
    }catch(err){
      console.log("err : ",err)
      return res.status(400).json({error:err})
    }
  
}