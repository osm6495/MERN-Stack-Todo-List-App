//dotenv allows environment variables to be excluded from Git commits
require('dotenv').config()

//Require and instantiate express
const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const router = require('./routes/todo')


//Routes
app.use('/api/todo', router)

//Database
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        //Listen
        app.listen(process.env.PORT, () => {
            console.log('Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
