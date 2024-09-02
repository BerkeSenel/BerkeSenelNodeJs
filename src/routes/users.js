const router = require('express').Router({ mergeParams: true });
const controller = require('../controllers/users')
const validators = require('../middlewares/user');

router.route("")
    .get(controller.getAll)
    .post(validators.create, controller.create)

router.get("/:id", validators.getOne, controller.getOne);

router.post("/:userId/borrow/:bookId", validators.borrowBook, controller.borrowBook);

router.post("/:userId/return/:bookId", validators.returnBook, controller.returnBook);


module.exports = router;