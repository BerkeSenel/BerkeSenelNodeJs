const service = require('../services/users')

exports.getAll = async function (req, res) {
  try {
    const datas = await service.latest();
    return res.status(200).send(datas);
  } catch (err) {
    return res.status(400).json({ error: err })
  }

}

exports.getOne = async function (req, res) {
  try {
    const datas = await service.mostDownloaded();
    return res.status(200).send(datas);
  } catch (err) {
    return res.status(400).json({ error: err })
  }

}

exports.create = async function (req, res) {
  try {
    const datas = await service.mostDownloaded();
    return res.status(200).send(datas);
  } catch (err) {
    return res.status(400).json({ error: err })
  }

}

exports.borrowBook = async function (req, res) {
  try {
    const datas = await service.mostDownloaded();
    return res.status(200).send(datas);
  } catch (err) {
    return res.status(400).json({ error: err })
  }

}

exports.returnBook = async function (req, res) {
  try {
    const datas = await service.mostDownloaded();
    return res.status(200).send(datas);
  } catch (err) {
    return res.status(400).json({ error: err })
  }

}
