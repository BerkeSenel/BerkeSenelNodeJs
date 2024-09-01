const router = require('express').Router({ mergeParams: true });
const controller = require('../controllers/books')

router.route("")
    .get(controller.getAll)
    .post(controller.create)

router.get("/:id",controller.getOne);




module.exports = router;