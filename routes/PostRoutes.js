const router = require('express').Router()
const controller = require('../controllers/Posts')
const middleware = require('../middleware')

router.get('/', controller.SeeAllPosts)
router.post(
    '/', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreatePost
)
router.put(
    '/:post_id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdatePost
)
router.delete(
    '/:post_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeletePosts
)

module.exports = router