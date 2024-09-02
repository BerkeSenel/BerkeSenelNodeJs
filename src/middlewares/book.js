const joi = require('joi');

exports.create = async function (req, res, next) {
    try {
        await joi.object({
          name: joi.string().required()
        }).validateAsync(req.body);
        next();
    } catch (error) {
        console.log("err : ",error)
        res.status(417).send('Must have correct data entry.');
    }
}

exports.getOne = async function (req, res, next) {
    try {
        await joi.object({
          id: joi.string().required()
        }).validateAsync(req.params);
        next();
    } catch (error) {
        console.log("err : ",error)
        res.status(417).send('Must have correct data entry.');
    }
}

