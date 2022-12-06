const { Comments } = require('../models')



const CreateComment = async (req, res) => {
    try {
        const comment = await Comments.create({ ...req.body})
        res.send(comment)
    } catch (error) {
        throw error
    }
}

const UpdateComment = async (req,res) => {
    try {
        const comment = await Comments.update(
            {...req.body},
            { where: {id: req.params.commentId}, returning: true}
        )  
        res.send(comment)
    } catch (error) {
        throw error
    }
}

const DeleteComment = async (req,res) => {
    try {
        await Comments.destroy({ where: {id: req.params.commentId}})
        res.send({ msg: 'Comment Deleted', payload: req.params.commentId})
    } catch (error) {
        throw error
    }
}

module.exports = {
    CreateComment,
    UpdateComment,
    DeleteComment
}