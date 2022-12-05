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


const users={
    "userdata": [
{"name":"Santa",
"img": "https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2022/01/12185631/tim-allen-santa-clause.jpeg"},
{"name":"Grinch"},
{"name":"Mrs. Claus"}
    ]
}


app.get('/suggestions', (req, res) => {
    console.log(req.body)
     res.setHeader("Content-Type", "application/json");
  res.json(users)
})




app.listen(PORT, () => { 
    console.log(`Express listening on port ${PORT}`)
})