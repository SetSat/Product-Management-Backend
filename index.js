require('dotenv').config();

const connectToMongo = require('./db')
connectToMongo();


const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const bodyparser = require('body-parser')
app.use(bodyparser.json())

const cors = require('cors')
const router = require('./Routes/router')
const authrouter = require('./Routes/auth')

app.use(cors());
app.use(express.json());
app.use(router);
app.use(authrouter)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

//added comment
