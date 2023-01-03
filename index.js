// required packages 
require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const db = require('./models')
const crypto = require('crypto-js')

// app config
const app = express()
const PORT = process.env.PORT
app.set('view engine', 'ejs')
// parse request bodies from html forms
app.use(express.urlencoded({ extended: false }))
// tell express to parse incoming cookies
app.use(cookieParser())

// custom auth middleware that checks the cookies for a user id
// and it findes one, look up the user in the db
// tell all downstream routes about this user
app.use(async (req, res, next) => {
    try {
        if (req.cookies.userId) {
            // decrypt the user id and turn it into a string
            const decryptedId = crypto.AES.decrypt(req.cookies.userId, process.env.SECRET)
            const decryptedString = decryptedId.toString(crypto.enc.Utf8)
            // the user is logged in, lets find then in the db
            const user = await db.user.findByPk(decryptedString)
            // mount the logged in user on the res.locals
            res.locals.user = user
        }
        // move on the next middleware/route
        next()
    } catch (err) {
        console.log('error in auth middleware: 🔥🔥🔥🔥', err)
        // explicity set user to null if there is an error
        res.locals.user = null
        next() // go to the next thing
    }
})

// // example custom middleware
// app.use((req, res, next) => {
    // console.log('hello from inside of the middleware!')
//     // res.locals are a place that we can put data to share with 'downstream routes'
//     // res.locals.myData = 'hello I am data'
//     // invoke next to tell express to go to the next route or middleware
    // next()
// })

// routes and controllers
app.get('/', (req, res) => {
    console.log(res.locals.user)
    res.render('home.ejs', {
        user: res.locals.user
    })
})

app.use('/users', require('./controllers/users'))
app.use('/villagers', require('./controllers/villagers'))

// listen on a port
app.listen(PORT, () => {
    console.log(`Its over ${PORT}! 🔐`)
})