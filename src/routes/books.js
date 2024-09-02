const router = require('express').Router({ mergeParams: true });
const controller = require('../controllers/books')
const validators = require('../middlewares/book');

router.route("")
    .get(controller.getAll)
    .post(validators.create, controller.create)

router.get("/:id", validators.getOne, controller.getOne);




module.exports = router;