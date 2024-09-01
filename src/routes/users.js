const router = require('express').Router({ mergeParams: true });
const controller = require('../controllers/users')

router.route("")
    .get(controller.getAll)
    .post(controller.create)

router.get("/:id", controller.getOne);

router.post("/:id/borrow/:bookId", controller.borrowBook);

router.post("/:id/return/:bookId", controller.returnBook);


module.exports = router;