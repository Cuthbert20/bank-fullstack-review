//use node to build an express server

const express = require('express')
const app = express()
require('dotenv').config()
const massive = require("massive")
const session = require('express-session')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const authCtrl = require('./controller/authController')



app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

app.post('/auth/register', authCtrl.register)
app.delete('/auth/logout', authCtrl.logout)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)


app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is now listening`))

}).catch(err => console.log(`not accessing db stu`))



