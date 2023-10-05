const express = require('express')
const mongoose = require('mongoose')
const alienRouter = require('./routes/aliens')
const url = 'mongodb+srv://sainigammandala:Sainigam@cluster0.nykoehb.mongodb.net/?retryWrites=true&w=majority'
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(url)
const con = mongoose.connection
con.on('open',() =>
{
    console.log('connected..')
})
app.use(express.json())
app.use('/aliens', alienRouter)
app.listen(9000, () =>
{
    console.log('Server started');
})