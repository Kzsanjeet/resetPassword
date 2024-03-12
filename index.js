const express = require('express')
const { json } = require('stream/consumers')
const app = express()
require('dotenv').config()

app.use(express.json())

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`))

