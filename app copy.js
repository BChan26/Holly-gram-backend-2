const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
app.use(cors());
app.post('/', (req, res) => {
    console.log(req.body)
  res.send('Hello World!')
})

const users={
    "userdata": [
{
"name":"Santa",
"img": "https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2022/01/12185631/tim-allen-santa-clause.jpeg"

}
,
{
"name":"Grinch"

}
,
{
"name":"Mrs. Claus"

}
    ]

}


app.get('/feed', (req, res) => {
    console.log(req.body)
     res.setHeader("Content-Type", "application/json");
  res.json(users)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})