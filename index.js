require('dotenv').config();

const connectToMongo = require('./db')
connectToMongo();

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;

const cors = require('cors')
const router = require('./Routes/router')

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})


