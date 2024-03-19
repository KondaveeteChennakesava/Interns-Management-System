const connectToMongo = require('./src/config/db')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const UserRouter = require('./src/routes/UserRoutes');

connectToMongo();

const app = express()
app.use(bodyParser.json());
app.use(cors());
app.use('/',UserRouter)

const port = 1432
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})