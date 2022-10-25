const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-Parser');
const homeRouter = require('./routers/homeRouter');

const port = process.env.port || 5000;

const app = express();


// database connection
mongoose.connect('mongodb://localhost:27017/cleanindata', { useNewUrlParser: true })
const db = mongoose.connection;

db.on("error", () => { console.log("error in connection"); })
db.once('open', () => { console.log("connected"); })



app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())



app.use('/', homeRouter)

app.listen(port,()=>{
    console.log("Connected to port!");
})