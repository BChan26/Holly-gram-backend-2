const { User } = require('../models')


const getUsers = (req, res)=>{
    res.send({msg: `Found users with an id of ${req.params.userId}`})
}

const SeeOneUser = async (req,res) => {
    try {
        const post = await User.findOne({where: {id: req.body.postId}})
        res.send(post)
       } catch (error) {
        throw error
       }
}

module.exports = {
    SeeOneUser
}