const router = require('express').Router()
const controller = require('../controllers/Comments')
const middleware = require('../middleware')


router.get('/', controller.SeeComments)

router.post(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateComment
)

router.put(
    ':comment_id', //<might need to be comments_id
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdateComment
)

router.delete(
    '/:comment_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteComment
)

module.exports = router