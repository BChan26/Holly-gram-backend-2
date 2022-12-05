const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRoute = require('./routes/AuthRoute')
const PostRoute = require('./routes/PostRoutes')
const UserRoute =require('./routes/UserRoute')

const PORT = process.env.PORT || 3001
const app = express()




app.use(cors())
app.use(logger('dev'))
app.use(express.json())


app.use('/auth', AuthRoute)
app.use('/feed', PostRoute)
app.use('/user', UserRoute)


app.listen(PORT, () => { 
    console.log(`Express listening on port ${PORT}`)
})