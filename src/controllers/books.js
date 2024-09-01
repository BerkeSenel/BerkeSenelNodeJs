const service = require('../services/books')

exports.getAll = async function (req, res) {
  try {
    const data = await service.getAll();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(400).json({ error: err.toString() })
  }

}

exports.getOne = async function (req, res) {
  try {
    const { id } = req.params
    const data = await service.getOne(id);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(400).json({ error: err.toString() })
  }
}

exports.create = async function (req, res) {
    try{
      const { body } = req
      const data = await service.create(body);
      return res.status(200).send(data);
    }catch(err){
      console.log("err : ",err)
      return res.status(400).json({error:err})
    }
  
}